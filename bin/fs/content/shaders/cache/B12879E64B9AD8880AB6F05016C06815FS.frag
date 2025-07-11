#version 430

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D tex_map0;
uniform sampler2D tex_map2;

layout(location = 2) in vec4 PARAM_2;
layout(location = 1) in vec4 PARAM_1;
layout(location = 0) in vec4 PARAM_0;
layout(location = 3) in vec4 PARAM_3;
layout(location = 4) in vec4 PARAM_4;
layout(location = 0) out vec4 PIXEL_0;
layout(location = 1) out vec4 PIXEL_1;
layout (location = 2) out uint ItemID;
int stackIdxVar;
int stateVar;
vec4 RVar[128];
vec4 _pixelTmp;
vec4 _pixelTmp_1;

void main()
{
    stackIdxVar = 0;
    stateVar = 0;
    RVar[0u] = PARAM_2;
    RVar[1u] = PARAM_1;
    RVar[2u] = PARAM_0;
    RVar[3u] = PARAM_3;
    RVar[4u] = PARAM_4;
    if (stateVar == 0)
    {
        vec4 _64 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_64.x, _64.y, _64.z, RVar[3u].w);
        RVar[4u] = texture(tex_map2, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
    }
    if (stateVar == 0)
    {
        float _87 = RVar[0u].z;
        float _89 = RVar[3u].z;
        float _92 = (_87 * _89) + uintBitsToFloat(0u);
        float _94 = RVar[0u].y;
        float _96 = RVar[3u].y;
        float _99 = (_94 * _96) + uintBitsToFloat(0u);
        float _101 = RVar[0u].x;
        float _103 = RVar[3u].x;
        float _106 = (_101 * _103) + uintBitsToFloat(0u);
        float _108 = RVar[0u].w;
        RVar[123u].x = _92;
        RVar[123u].y = _99;
        RVar[123u].z = _106;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _121 = RVar[4u].w;
        float _124 = (clamp(_108 + uintBitsToFloat(0u), 0.0, 1.0) * _121) + uintBitsToFloat(0u);
        float _135 = RVar[2u].z;
        float _137 = RVar[2u].z;
        RVar[123u].x = _124;
        float _141 = RVar[2u].y;
        float _143 = RVar[2u].y;
        float _145 = (_141 * _143) + (_135 * _137);
        float _147 = RVar[4u].z;
        float _150 = (clamp(_92 + uintBitsToFloat(0u), 0.0, 1.0) * _147) + uintBitsToFloat(0u);
        float _152 = RVar[4u].y;
        float _155 = (clamp(_99 + uintBitsToFloat(0u), 0.0, 1.0) * _152) + uintBitsToFloat(0u);
        float _157 = RVar[4u].x;
        float _160 = (clamp(_106 + uintBitsToFloat(0u), 0.0, 1.0) * _157) + uintBitsToFloat(0u);
        RVar[123u].x = _145;
        RVar[123u].y = _150;
        RVar[123u].z = _155;
        RVar[123u].w = _160;
        RVar[4u].w = clamp(_124 + uintBitsToFloat(0u), 0.0, 1.0);
        float _171 = clamp(_160 + uintBitsToFloat(0u), 0.0, 1.0);
        float _173 = RVar[2u].x;
        float _175 = RVar[2u].x;
        float _177 = (_173 * _175) + _145;
        float _180 = clamp(_150 + uintBitsToFloat(0u), 0.0, 1.0);
        float _183 = clamp(_155 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].x = _171;
        RVar[123u].y = _177;
        RVar[127u].z = _180;
        RVar[127u].w = _183;
        float _190 = RVar[1u].x;
        float _194 = RVar[1u].z;
        float _198 = RVar[1u].y;
        float _203 = inversesqrt(_177) * 0.5;
        RVar[126u].x = _203;
        float _213 = RVar[1u].w;
        float _215 = RVar[127u].w;
        float _219 = RVar[1u].w;
        float _221 = RVar[127u].z;
        float _225 = RVar[2u].x;
        RVar[4u].x = ((_190 + (-_171)) * RVar[1u].w) + RVar[127u].x;
        RVar[4u].y = ((_198 + (-_183)) * _213) + _215;
        RVar[4u].z = ((_194 + (-_180)) * _219) + _221;
        RVar[0u].x = (_225 * _203) + uintBitsToFloat(1056964608u);
        float _235 = RVar[2u].y;
        float _237 = RVar[126u].x;
        float _240 = (_235 * _237) + uintBitsToFloat(1056964608u);
        float _242 = RVar[2u].z;
        float _244 = RVar[126u].x;
        float _247 = (_242 * _244) + uintBitsToFloat(1056964608u);
        RVar[0u].y = _240;
        RVar[0u].z = _247;
        float _253 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _240;
        RVar[1u].z = _247;
        RVar[1u].w = _253;
        float _261 = RVar[4u].y;
        float _263 = RVar[4u].z;
        float _265 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _261;
        RVar[0u].z = _263;
        RVar[0u].w = _265;
    }
    switch (PS_PUSH.alphaFunc & 255u)
    {
        case 0u:
        {
            discard;
        }
        case 1u:
        {
            if (!(RVar[0u].w < PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 2u:
        {
            if (abs(RVar[0u].w - PS_PUSH.alphaRef) > 9.9999997473787516355514526367188e-05)
            {
                discard;
            }
            break;
        }
        case 3u:
        {
            if (!(RVar[0u].w <= PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 4u:
        {
            if (!(RVar[0u].w > PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 5u:
        {
            if (abs(RVar[0u].w - PS_PUSH.alphaRef) <= 9.9999997473787516355514526367188e-05)
            {
                discard;
            }
            break;
        }
        case 6u:
        {
            if (!(RVar[0u].w >= PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
    }
    _pixelTmp = RVar[0u];
    uint _341 = PS_PUSH.alphaFunc >> 8u;
    if (_341 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_341 == 2u)
        {
            _pixelTmp = vec4(0.0);
        }
    }
    if ((PS_PUSH.needsPremultiply & 1u) != 0u)
    {
        _pixelTmp *= vec4(_pixelTmp.www, 1.0);
    }
    if (PS_PUSH.uIsSelected != 0) PIXEL_0 = vec4(_pixelTmp.rgb * 0.5f + vec3(1.0f, 0.25f, 0.25f) * 0.5f, _pixelTmp.a); else PIXEL_0 = _pixelTmp; ItemID = PS_PUSH.uItemID;
    _pixelTmp_1 = RVar[1u];
    uint _369 = PS_PUSH.alphaFunc >> 8u;
    if (_369 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_369 == 2u)
        {
            _pixelTmp_1 = vec4(0.0);
        }
    }
    if ((PS_PUSH.needsPremultiply & 2u) != 0u)
    {
        _pixelTmp_1 *= vec4(_pixelTmp_1.www, 1.0);
    }
    PIXEL_1 = _pixelTmp_1;
}

 