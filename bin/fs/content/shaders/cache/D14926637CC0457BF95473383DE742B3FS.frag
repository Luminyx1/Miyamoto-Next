#version 430

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D tex_map1;
uniform sampler2D tex_map0;

layout(location = 2) in vec4 PARAM_2;
layout(location = 0) in vec4 PARAM_0;
layout(location = 1) in vec4 PARAM_1;
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
    RVar[1u] = PARAM_0;
    RVar[2u] = PARAM_1;
    RVar[3u] = PARAM_3;
    RVar[4u] = PARAM_4;
    if (stateVar == 0)
    {
        vec4 _64 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_64.x, _64.y, _64.z, RVar[4u].w);
        vec4 _79 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_79.x, _79.y, _79.z, RVar[3u].w);
    }
    if (stateVar == 0)
    {
        float _89 = RVar[2u].z;
        float _91 = RVar[2u].z;
        float _94 = RVar[4u].z;
        float _99 = (_94 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _101 = RVar[4u].y;
        float _105 = (_101 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _107 = RVar[4u].x;
        float _111 = (_107 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        RVar[123u].y = _99;
        RVar[123u].z = _105;
        RVar[123u].w = _111;
        RVar[4u].w = uintBitsToFloat(0u);
        float _119 = RVar[0u].x;
        float _124 = RVar[0u].z;
        float _128 = RVar[0u].y;
        float _132 = RVar[2u].y;
        float _134 = RVar[2u].y;
        float _136 = (_132 * _134) + (_89 * _91);
        RVar[122u].x = _136;
        float _140 = RVar[3u].z;
        float _143 = (clamp(_124 + _99, 0.0, 1.0) * _140) + uintBitsToFloat(0u);
        float _145 = RVar[3u].y;
        float _148 = (clamp(_128 + _105, 0.0, 1.0) * _145) + uintBitsToFloat(0u);
        float _150 = RVar[3u].x;
        float _153 = (clamp(_119 + _111, 0.0, 1.0) * _150) + uintBitsToFloat(0u);
        float _155 = RVar[2u].x;
        float _157 = RVar[2u].x;
        float _159 = (_155 * _157) + _136;
        RVar[123u].x = _143;
        RVar[123u].y = _148;
        RVar[123u].z = _153;
        RVar[123u].w = _159;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _170 = clamp((_143 + uintBitsToFloat(0u)) * 2.0, 0.0, 1.0);
        float _174 = clamp((_148 + uintBitsToFloat(0u)) * 2.0, 0.0, 1.0);
        float _178 = clamp((_153 + uintBitsToFloat(0u)) * 2.0, 0.0, 1.0);
        float _181 = inversesqrt(_159) * 0.5;
        RVar[127u].y = _170;
        RVar[127u].z = _174;
        RVar[127u].w = _178;
        RVar[127u].x = _181;
        float _188 = RVar[1u].x;
        float _198 = RVar[1u].z;
        float _202 = RVar[1u].y;
        float _206 = RVar[2u].x;
        RVar[3u].y = (RVar[2u].y * _181) + uintBitsToFloat(1056964608u);
        RVar[3u].x = (_206 * _181) + uintBitsToFloat(1056964608u);
        float _219 = RVar[1u].w;
        float _221 = RVar[127u].z;
        float _225 = RVar[1u].w;
        float _227 = RVar[127u].y;
        float _231 = RVar[2u].z;
        float _233 = RVar[127u].x;
        float _236 = (_231 * _233) + uintBitsToFloat(1056964608u);
        RVar[4u].x = ((_188 + (-_178)) * RVar[1u].w) + RVar[127u].w;
        RVar[4u].y = ((_202 + (-_174)) * _219) + _221;
        RVar[4u].z = ((_198 + (-_170)) * _225) + _227;
        RVar[3u].z = _236;
        float _244 = RVar[3u].y;
        float _246 = RVar[3u].w;
        RVar[1u].x = RVar[3u].x;
        RVar[1u].y = _244;
        RVar[1u].z = _236;
        RVar[1u].w = _246;
        float _254 = RVar[4u].y;
        float _256 = RVar[4u].z;
        float _258 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _254;
        RVar[0u].z = _256;
        RVar[0u].w = _258;
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
    uint _334 = PS_PUSH.alphaFunc >> 8u;
    if (_334 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_334 == 2u)
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
    uint _362 = PS_PUSH.alphaFunc >> 8u;
    if (_362 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_362 == 2u)
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