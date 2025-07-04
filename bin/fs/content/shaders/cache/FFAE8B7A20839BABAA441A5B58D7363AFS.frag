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

layout(location = 0) in vec4 PARAM_0;
layout(location = 1) in vec4 PARAM_1;
layout(location = 3) in vec4 PARAM_3;
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
    RVar[0u] = PARAM_0;
    RVar[1u] = PARAM_1;
    RVar[2u] = PARAM_3;
    if (stateVar == 0)
    {
        RVar[2u] = vec4(texture(tex_map0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy).w, RVar[2u].y, RVar[2u].z, RVar[2u].w);
    }
    if (stateVar == 0)
    {
        float _75 = clamp(CBUFFER_1.values[4].x + uintBitsToFloat(0u), 0.0, 1.0);
        float _81 = RVar[2u].x;
        RVar[127u].x = _75;
        RVar[127u].y = (CBUFFER_1.values[4].w * _81) + uintBitsToFloat(0u);
        RVar[127u].z = clamp(CBUFFER_1.values[4].z + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = clamp(CBUFFER_1.values[4].y + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _122 = RVar[0u].x;
        RVar[126u].y = dot(vec4(RVar[1u].x, RVar[1u].y, RVar[1u].z, uintBitsToFloat(2147483648u)), vec4(RVar[1u].x, RVar[1u].y, RVar[1u].z, uintBitsToFloat(0u)));
        float _134 = RVar[0u].z;
        float _136 = RVar[127u].z;
        float _140 = RVar[0u].y;
        float _142 = RVar[127u].w;
        float _146 = RVar[127u].y;
        RVar[3u].x = ((_122 + (-_75)) * RVar[0u].w) + RVar[127u].x;
        RVar[3u].w = clamp(_146 + uintBitsToFloat(0u), 0.0, 1.0);
        float _159 = RVar[0u].w;
        float _161 = RVar[127u].z;
        float _165 = RVar[126u].y;
        float _168 = inversesqrt(_165) * 0.5;
        RVar[3u].y = ((_140 + (-_142)) * RVar[0u].w) + RVar[127u].w;
        RVar[3u].z = ((_134 + (-_136)) * _159) + _161;
        float _172 = RVar[1u].x;
        float _176 = (_172 * _168) + uintBitsToFloat(1056964608u);
        float _178 = RVar[1u].y;
        float _181 = (_178 * _168) + uintBitsToFloat(1056964608u);
        float _183 = RVar[1u].z;
        float _186 = (_183 * _168) + uintBitsToFloat(1056964608u);
        RVar[2u].x = _176;
        RVar[2u].y = _181;
        RVar[2u].z = _186;
        float _191 = RVar[2u].w;
        RVar[1u].x = _176;
        RVar[1u].y = _181;
        RVar[1u].z = _186;
        RVar[1u].w = _191;
        float _199 = RVar[3u].y;
        float _201 = RVar[3u].z;
        float _203 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _199;
        RVar[0u].z = _201;
        RVar[0u].w = _203;
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
    uint _279 = PS_PUSH.alphaFunc >> 8u;
    if (_279 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_279 == 2u)
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
    uint _307 = PS_PUSH.alphaFunc >> 8u;
    if (_307 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_307 == 2u)
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