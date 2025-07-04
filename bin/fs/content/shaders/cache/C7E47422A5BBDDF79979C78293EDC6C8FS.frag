#version 430

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D tex_map0;
uniform sampler2D tex_map1;

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
        RVar[3u] = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        vec4 _77 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_77.x, _77.y, _77.z, RVar[4u].w);
    }
    if (stateVar == 0)
    {
        float _87 = RVar[0u].x;
        float _89 = RVar[3u].x;
        float _92 = (_87 * _89) + uintBitsToFloat(0u);
        float _94 = RVar[4u].x;
        float _100 = RVar[0u].z;
        float _102 = RVar[3u].z;
        float _105 = (_100 * _102) + uintBitsToFloat(0u);
        float _107 = RVar[0u].y;
        float _109 = RVar[3u].y;
        float _112 = (_107 * _109) + uintBitsToFloat(0u);
        float _114 = RVar[4u].y;
        RVar[123u].x = _92;
        RVar[127u].y = (-_94) + uintBitsToFloat(1065353216u);
        RVar[123u].z = _105;
        RVar[123u].w = _112;
        RVar[127u].x = (-_114) + uintBitsToFloat(1065353216u);
        float _133 = RVar[4u].z;
        float _141 = RVar[0u].w;
        float _143 = RVar[3u].w;
        float _146 = (_141 * _143) + uintBitsToFloat(0u);
        RVar[122u].x = _146;
        float _151 = (clamp(_105 + uintBitsToFloat(0u), 0.0, 1.0) * ((-_133) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _153 = RVar[127u].x;
        float _156 = (clamp(_112 + uintBitsToFloat(0u), 0.0, 1.0) * _153) + uintBitsToFloat(0u);
        float _158 = RVar[127u].y;
        float _161 = (clamp(_92 + uintBitsToFloat(0u), 0.0, 1.0) * _158) + uintBitsToFloat(0u);
        RVar[123u].x = _151;
        RVar[123u].y = _156;
        RVar[123u].z = _161;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _171 = RVar[2u].z;
        float _173 = RVar[2u].z;
        float _182 = RVar[4u].y;
        float _188 = RVar[4u].x;
        float _192 = clamp((_188 * uintBitsToFloat(1065353216u)) + _161, 0.0, 1.0);
        RVar[127u].y = clamp((RVar[4u].z * uintBitsToFloat(1065353216u)) + _151, 0.0, 1.0);
        RVar[127u].z = clamp((_182 * uintBitsToFloat(1065353216u)) + _156, 0.0, 1.0);
        RVar[127u].w = _192;
        RVar[4u].w = clamp(clamp(_146 + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0);
        float _201 = RVar[2u].x;
        float _203 = RVar[2u].y;
        float _208 = RVar[2u].x;
        float _210 = RVar[2u].y;
        float _226 = RVar[1u].z;
        float _228 = RVar[127u].y;
        float _232 = RVar[1u].y;
        float _234 = RVar[127u].z;
        float _239 = inversesqrt(dot(vec4(_201, _203, _171 * _173, uintBitsToFloat(2147483648u)), vec4(_208, _210, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[4u].x = ((RVar[1u].x + (-_192)) * RVar[1u].w) + RVar[127u].w;
        RVar[127u].x = _239;
        float _249 = RVar[1u].w;
        float _251 = RVar[127u].z;
        float _255 = RVar[1u].w;
        float _257 = RVar[127u].y;
        float _261 = RVar[2u].y;
        RVar[0u].x = (RVar[2u].x * _239) + uintBitsToFloat(1056964608u);
        RVar[4u].y = ((_232 + (-_234)) * _249) + _251;
        RVar[4u].z = ((_226 + (-_228)) * _255) + _257;
        RVar[0u].y = (_261 * _239) + uintBitsToFloat(1056964608u);
        float _270 = RVar[2u].z;
        float _272 = RVar[127u].x;
        float _275 = (_270 * _272) + uintBitsToFloat(1056964608u);
        RVar[0u].z = _275;
        float _280 = RVar[0u].y;
        float _282 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _280;
        RVar[1u].z = _275;
        RVar[1u].w = _282;
        float _290 = RVar[4u].y;
        float _292 = RVar[4u].z;
        float _294 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _290;
        RVar[0u].z = _292;
        RVar[0u].w = _294;
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
    uint _370 = PS_PUSH.alphaFunc >> 8u;
    if (_370 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_370 == 2u)
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
    uint _398 = PS_PUSH.alphaFunc >> 8u;
    if (_398 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_398 == 2u)
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