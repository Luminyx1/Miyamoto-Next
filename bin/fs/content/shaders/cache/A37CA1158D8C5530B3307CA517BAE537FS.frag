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

layout(location = 1) in vec4 PARAM_1;
layout(location = 0) in vec4 PARAM_0;
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
    RVar[0u] = PARAM_1;
    RVar[1u] = PARAM_0;
    if (stateVar == 0)
    {
        float _36 = RVar[1u].z;
        float _38 = RVar[1u].z;
        float _63 = clamp(CBUFFER_1.values[4].x + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].y = clamp(CBUFFER_1.values[4].z + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].z = clamp(CBUFFER_1.values[4].y + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = _63;
        RVar[3u].w = uintBitsToFloat(0u);
        float _88 = RVar[0u].x;
        RVar[126u].y = dot(vec4(RVar[1u].x, RVar[1u].y, _36 * _38, uintBitsToFloat(2147483648u)), vec4(RVar[1u].x, RVar[1u].y, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)));
        float _100 = RVar[0u].z;
        float _102 = RVar[127u].y;
        float _106 = RVar[0u].y;
        float _108 = RVar[127u].z;
        RVar[3u].x = ((_88 + (-_63)) * RVar[0u].w) + RVar[127u].w;
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _121 = RVar[0u].w;
        float _123 = RVar[127u].y;
        float _127 = RVar[126u].y;
        float _130 = inversesqrt(_127) * 0.5;
        RVar[3u].y = ((_106 + (-_108)) * RVar[0u].w) + RVar[127u].z;
        RVar[3u].z = ((_100 + (-_102)) * _121) + _123;
        float _134 = RVar[1u].x;
        float _138 = (_134 * _130) + uintBitsToFloat(1056964608u);
        float _140 = RVar[1u].y;
        float _143 = (_140 * _130) + uintBitsToFloat(1056964608u);
        float _145 = RVar[1u].z;
        float _148 = (_145 * _130) + uintBitsToFloat(1056964608u);
        RVar[2u].x = _138;
        RVar[2u].y = _143;
        RVar[2u].z = _148;
        float _153 = RVar[2u].w;
        RVar[1u].x = _138;
        RVar[1u].y = _143;
        RVar[1u].z = _148;
        RVar[1u].w = _153;
        float _161 = RVar[3u].y;
        float _163 = RVar[3u].z;
        float _165 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _161;
        RVar[0u].z = _163;
        RVar[0u].w = _165;
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
    uint _241 = PS_PUSH.alphaFunc >> 8u;
    if (_241 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_241 == 2u)
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
    uint _269 = PS_PUSH.alphaFunc >> 8u;
    if (_269 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_269 == 2u)
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