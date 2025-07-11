#version 430

layout(std140) uniform Mat
{
    vec4 values[41];
} CBUFFER_1;

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
        RVar[3u] = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        vec4 _77 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_77.x, _77.y, _77.z, RVar[4u].w);
    }
    if (stateVar == 0)
    {
        float _87 = RVar[0u].y;
        float _89 = RVar[3u].y;
        float _92 = (_87 * _89) + uintBitsToFloat(0u);
        float _94 = RVar[0u].x;
        float _96 = RVar[3u].x;
        float _99 = (_94 * _96) + uintBitsToFloat(0u);
        float _109 = RVar[4u].x;
        float _114 = RVar[0u].z;
        float _116 = RVar[3u].z;
        float _119 = (_114 * _116) + uintBitsToFloat(0u);
        float _123 = RVar[4u].y;
        RVar[123u].x = _92;
        RVar[123u].y = _99;
        RVar[127u].z = (CBUFFER_1.values[4].x * _109) + uintBitsToFloat(0u);
        RVar[123u].w = _119;
        RVar[127u].y = (CBUFFER_1.values[4].y * _123) + uintBitsToFloat(0u);
        float _147 = RVar[4u].z;
        float _150 = (CBUFFER_1.values[4].z * _147) + uintBitsToFloat(0u);
        float _152 = RVar[0u].w;
        float _154 = RVar[3u].w;
        float _157 = (_152 * _154) + uintBitsToFloat(0u);
        RVar[123u].w = _150;
        RVar[122u].x = _157;
        float _167 = RVar[127u].y;
        float _171 = RVar[127u].z;
        float _173 = clamp(clamp(_99 + uintBitsToFloat(0u), 0.0, 1.0) + _171, 0.0, 1.0);
        RVar[127u].x = clamp(_157 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].y = clamp(clamp(_119 + uintBitsToFloat(0u), 0.0, 1.0) + _150, 0.0, 1.0);
        RVar[127u].z = clamp(clamp(_92 + uintBitsToFloat(0u), 0.0, 1.0) + _167, 0.0, 1.0);
        RVar[127u].w = _173;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _200 = RVar[1u].x;
        RVar[126u].y = dot(vec4(RVar[2u].x, RVar[2u].y, RVar[2u].z, uintBitsToFloat(2147483648u)), vec4(RVar[2u].x, RVar[2u].y, RVar[2u].z, uintBitsToFloat(0u)));
        float _212 = RVar[1u].z;
        float _214 = RVar[127u].y;
        float _218 = RVar[1u].y;
        float _220 = RVar[127u].z;
        float _224 = RVar[127u].x;
        RVar[3u].x = ((_200 + (-_173)) * RVar[1u].w) + RVar[127u].w;
        RVar[3u].w = clamp(_224 + uintBitsToFloat(0u), 0.0, 1.0);
        float _237 = RVar[1u].w;
        float _239 = RVar[127u].y;
        float _243 = RVar[126u].y;
        float _246 = inversesqrt(_243) * 0.5;
        RVar[3u].y = ((_218 + (-_220)) * RVar[1u].w) + RVar[127u].z;
        RVar[3u].z = ((_212 + (-_214)) * _237) + _239;
        float _250 = RVar[2u].x;
        float _254 = (_250 * _246) + uintBitsToFloat(1056964608u);
        float _256 = RVar[2u].y;
        float _259 = (_256 * _246) + uintBitsToFloat(1056964608u);
        float _261 = RVar[2u].z;
        float _264 = (_261 * _246) + uintBitsToFloat(1056964608u);
        RVar[0u].x = _254;
        RVar[0u].y = _259;
        RVar[0u].z = _264;
        float _269 = RVar[0u].w;
        RVar[1u].x = _254;
        RVar[1u].y = _259;
        RVar[1u].z = _264;
        RVar[1u].w = _269;
        float _277 = RVar[3u].y;
        float _279 = RVar[3u].z;
        float _281 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _277;
        RVar[0u].z = _279;
        RVar[0u].w = _281;
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
    uint _357 = PS_PUSH.alphaFunc >> 8u;
    if (_357 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_357 == 2u)
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
    uint _385 = PS_PUSH.alphaFunc >> 8u;
    if (_385 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_385 == 2u)
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