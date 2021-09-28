const frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;


varying vec2 v_texcoord;

vec4 rgb(float r, float g, float b) {
    return vec4(r / 255.0, g / 255.0, b / 255.0, 1.0);
}

void main(void)
{
    vec2 uv = v_texcoord;
    
    vec4 tl = rgb(213.0, 239.0, 209.0);
    vec4 tr = rgb(222.0, 225.0, 255.0);
    vec4 bl = rgb(54.0, 72.0, 235.0);
    vec4 br = rgb(255.0, 255.0, 255.0);

    
    float dispY = 0.09 * sin(u_time);
    float dispX = 0.03 * sin(u_time);
    
    vec4 color = mix(
        mix(tl, tr, uv.x + dispX),
        mix(bl, br, uv.x - dispX),
        uv.y + dispY
    );
    
    gl_FragColor = color;
}
`