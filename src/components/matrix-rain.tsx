import React, { useEffect, useRef } from 'react';

const vertexShader = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float time;
  uniform vec2 resolution;
  uniform sampler2D noiseTexture;
  
  const float CHAR_SIZE = 0.05;
  const float STREAM_SPEED = 0.5;
  const float BRIGHTNESS = 0.8;
  const float FADE_SPEED = 0.1;
  
  // Character set including katakana, Latin letters, and numbers
  const int CHARS[128] = int[128](
    0x3041, 0x3042, 0x3043, 0x3044, 0x3045, 0x3046, 0x3047, 0x3048, // Katakana
    0x3049, 0x304A, 0x304B, 0x304C, 0x304D, 0x304E, 0x304F, 0x3050,
    0x3051, 0x3052, 0x3053, 0x3054, 0x3055, 0x3056, 0x3057, 0x3058,
    0x3059, 0x305A, 0x305B, 0x305C, 0x305D, 0x305E, 0x305F, 0x3060,
    0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, // Latin letters
    0x49, 0x4A, 0x4B, 0x4C, 0x4D, 0x4E, 0x4F, 0x50,
    0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58,
    0x59, 0x5A, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66,
    0x67, 0x68, 0x69, 0x6A, 0x6B, 0x6C, 0x6D, 0x6E,
    0x6F, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75, 0x76,
    0x77, 0x78, 0x79, 0x7A,
    0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, // Numbers
    0x38, 0x39
  );

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float getChar(vec2 uv, int charCode) {
    // Simplified character rendering
    float x = mod(uv.x, 1.0);
    float y = mod(uv.y, 1.0);
    return step(0.5, random(vec2(charCode, x + y)));
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 pos = floor(uv / CHAR_SIZE);
    float stream = random(pos.x * 100.0);
    float speed = mix(0.5, 1.5, random(pos.x * 200.0));
    float timeOffset = time * speed * STREAM_SPEED;
    
    float y = mod(uv.y - timeOffset * stream, 1.0);
    float brightness = mix(0.1, BRIGHTNESS, smoothstep(0.0, 0.1, y));
    brightness *= mix(0.1, 1.0, smoothstep(0.9, 1.0, 1.0 - y));
    
    int charIndex = int(random(pos.x * 300.0) * 128.0);
    float char = getChar(vec2(uv.x, y), CHARS[charIndex]);
    
    vec3 color = vec3(0.0, brightness * char, 0.0);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    glRef.current = gl;

    // Create shader program
    const program = gl.createProgram();
    if (!program) return;

    const vertexShaderObj = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShaderObj = gl.createShader(gl.FRAGMENT_SHADER);
    if (!vertexShaderObj || !fragmentShaderObj) return;

    gl.shaderSource(vertexShaderObj, vertexShader);
    gl.shaderSource(fragmentShaderObj, fragmentShader);
    gl.compileShader(vertexShaderObj);
    gl.compileShader(fragmentShaderObj);

    gl.attachShader(program, vertexShaderObj);
    gl.attachShader(program, fragmentShaderObj);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Failed to link shader program:', gl.getProgramInfoLog(program));
      return;
    }

    programRef.current = program;

    // Create vertex buffer
    const vertices = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
       1.0,  1.0,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Set up position attribute
    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Animation loop
    const animate = () => {
      if (!gl || !program) return;

      const time = (Date.now() - startTimeRef.current) / 1000;
      const timeLocation = gl.getUniformLocation(program, 'time');
      const resolutionLocation = gl.getUniformLocation(program, 'resolution');

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'black' }}
    />
  );
}; 