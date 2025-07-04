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

layout(location = 2) in vec4 PARAM_2;
layout(location = 0) in vec4 PARAM_0;
layout(location = 1) in vec4 PARAM_1;
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
    if (stateVar == 0)
    {
        float _40 = RVar[0u].w;
        float _45 = (_40 * uintBitsToFloat(1059061760u)) + uintBitsToFloat(0u);
        float _47 = RVar[0u].z;
        float _58 = (_47 * CBUFFER_1.values[4].z) + uintBitsToFloat(0u);
        float _60 = RVar[0u].y;
        float _65 = (_60 * CBUFFER_1.values[4].y) + uintBitsToFloat(0u);
        float _67 = RVar[0u].x;
        float _72 = (_67 * CBUFFER_1.values[4].x) + uintBitsToFloat(0u);
        RVar[123u].x = _45;
        RVar[123u].y = _58;
        RVar[123u].z = _65;
        RVar[123u].w = _72;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _86 = clamp(_72 + uintBitsToFloat(0u), 0.0, 1.0);
        float _88 = RVar[2u].z;
        float _90 = RVar[2u].z;
        RVar[127u].x = _86;
        RVar[127u].z = clamp(_58 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = clamp(_65 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[3u].w = clamp(_45 + uintBitsToFloat(0u), 0.0, 1.0);
        float _107 = RVar[2u].x;
        float _109 = RVar[2u].y;
        float _114 = RVar[2u].x;
        float _116 = RVar[2u].y;
        float _132 = RVar[1u].z;
        float _134 = RVar[127u].z;
        float _138 = RVar[1u].y;
        float _140 = RVar[127u].w;
        float _145 = inversesqrt(dot(vec4(_107, _109, _88 * _90, uintBitsToFloat(2147483648u)), vec4(_114, _116, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[3u].x = ((RVar[1u].x + (-_86)) * RVar[1u].w) + RVar[127u].x;
        RVar[127u].x = _145;
        float _155 = RVar[1u].w;
        float _157 = RVar[127u].w;
        float _161 = RVar[1u].w;
        float _163 = RVar[127u].z;
        float _167 = RVar[2u].y;
        RVar[0u].x = (RVar[2u].x * _145) + uintBitsToFloat(1056964608u);
        RVar[3u].y = ((_138 + (-_140)) * _155) + _157;
        RVar[3u].z = ((_132 + (-_134)) * _161) + _163;
        RVar[0u].y = (_167 * _145) + uintBitsToFloat(1056964608u);
        float _176 = RVar[2u].z;
        float _178 = RVar[127u].x;
        float _181 = (_176 * _178) + uintBitsToFloat(1056964608u);
        RVar[0u].z = _181;
        float _186 = RVar[0u].y;
        float _188 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _186;
        RVar[1u].z = _181;
        RVar[1u].w = _188;
        float _196 = RVar[3u].y;
        float _198 = RVar[3u].z;
        float _200 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _196;
        RVar[0u].z = _198;
        RVar[0u].w = _200;
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
    uint _276 = PS_PUSH.alphaFunc >> 8u;
    if (_276 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_276 == 2u)
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
    uint _304 = PS_PUSH.alphaFunc >> 8u;
    if (_304 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_304 == 2u)
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