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
        float _39 = RVar[0u].z;
        float _50 = (_39 * CBUFFER_1.values[4].z) + uintBitsToFloat(0u);
        float _52 = RVar[0u].y;
        float _57 = (_52 * CBUFFER_1.values[4].y) + uintBitsToFloat(0u);
        float _59 = RVar[0u].x;
        float _64 = (_59 * CBUFFER_1.values[4].x) + uintBitsToFloat(0u);
        RVar[123u].x = _50;
        RVar[123u].y = _57;
        RVar[123u].z = _64;
        RVar[3u].w = uintBitsToFloat(0u);
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _76 = RVar[2u].z;
        float _78 = RVar[2u].z;
        float _91 = clamp(_64 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].y = clamp(_50 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].z = clamp(_57 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = _91;
        float _97 = RVar[2u].x;
        float _99 = RVar[2u].y;
        float _104 = RVar[2u].x;
        float _106 = RVar[2u].y;
        float _122 = RVar[1u].z;
        float _124 = RVar[127u].y;
        float _128 = RVar[1u].y;
        float _130 = RVar[127u].z;
        float _135 = inversesqrt(dot(vec4(_97, _99, _76 * _78, uintBitsToFloat(2147483648u)), vec4(_104, _106, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[3u].x = ((RVar[1u].x + (-_91)) * RVar[1u].w) + RVar[127u].w;
        RVar[127u].x = _135;
        float _145 = RVar[1u].w;
        float _147 = RVar[127u].z;
        float _151 = RVar[1u].w;
        float _153 = RVar[127u].y;
        float _157 = RVar[2u].y;
        RVar[0u].x = (RVar[2u].x * _135) + uintBitsToFloat(1056964608u);
        RVar[3u].y = ((_128 + (-_130)) * _145) + _147;
        RVar[3u].z = ((_122 + (-_124)) * _151) + _153;
        RVar[0u].y = (_157 * _135) + uintBitsToFloat(1056964608u);
        float _166 = RVar[2u].z;
        float _168 = RVar[127u].x;
        float _171 = (_166 * _168) + uintBitsToFloat(1056964608u);
        RVar[0u].z = _171;
        float _176 = RVar[0u].y;
        float _178 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _176;
        RVar[1u].z = _171;
        RVar[1u].w = _178;
        float _186 = RVar[3u].y;
        float _188 = RVar[3u].z;
        float _190 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _186;
        RVar[0u].z = _188;
        RVar[0u].w = _190;
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
    uint _266 = PS_PUSH.alphaFunc >> 8u;
    if (_266 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_266 == 2u)
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
    uint _294 = PS_PUSH.alphaFunc >> 8u;
    if (_294 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_294 == 2u)
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