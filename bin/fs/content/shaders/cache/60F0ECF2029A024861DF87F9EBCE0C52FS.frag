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
        vec4 _56 = texture(tex_map0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
        RVar[2u] = vec4(_56.x, _56.y, _56.z, RVar[2u].w);
    }
    if (stateVar == 0)
    {
        float _77 = (CBUFFER_1.values[4].w * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _82 = RVar[2u].z;
        float _85 = (CBUFFER_1.values[4].z * _82) + uintBitsToFloat(0u);
        float _89 = RVar[2u].y;
        float _92 = (CBUFFER_1.values[4].y * _89) + uintBitsToFloat(0u);
        float _96 = RVar[2u].x;
        float _99 = (CBUFFER_1.values[4].x * _96) + uintBitsToFloat(0u);
        RVar[123u].x = _77;
        RVar[123u].y = _85;
        RVar[123u].z = _92;
        RVar[123u].w = _99;
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _110 = clamp(_99 + uintBitsToFloat(0u), 0.0, 1.0);
        float _112 = RVar[1u].z;
        float _114 = RVar[1u].z;
        RVar[127u].x = _110;
        RVar[127u].z = clamp(_85 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = clamp(_92 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[3u].w = clamp(_77 + uintBitsToFloat(0u), 0.0, 1.0);
        float _131 = RVar[1u].x;
        float _133 = RVar[1u].y;
        float _138 = RVar[1u].x;
        float _140 = RVar[1u].y;
        float _156 = RVar[0u].z;
        float _158 = RVar[127u].z;
        float _162 = RVar[0u].y;
        float _164 = RVar[127u].w;
        float _169 = inversesqrt(dot(vec4(_131, _133, _112 * _114, uintBitsToFloat(2147483648u)), vec4(_138, _140, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[3u].x = ((RVar[0u].x + (-_110)) * RVar[0u].w) + RVar[127u].x;
        RVar[127u].x = _169;
        float _179 = RVar[0u].w;
        float _181 = RVar[127u].w;
        float _185 = RVar[0u].w;
        float _187 = RVar[127u].z;
        float _191 = RVar[1u].y;
        RVar[2u].x = (RVar[1u].x * _169) + uintBitsToFloat(1056964608u);
        RVar[3u].y = ((_162 + (-_164)) * _179) + _181;
        RVar[3u].z = ((_156 + (-_158)) * _185) + _187;
        RVar[2u].y = (_191 * _169) + uintBitsToFloat(1056964608u);
        float _200 = RVar[1u].z;
        float _202 = RVar[127u].x;
        float _205 = (_200 * _202) + uintBitsToFloat(1056964608u);
        RVar[2u].z = _205;
        float _210 = RVar[2u].y;
        float _212 = RVar[2u].w;
        RVar[1u].x = RVar[2u].x;
        RVar[1u].y = _210;
        RVar[1u].z = _205;
        RVar[1u].w = _212;
        float _220 = RVar[3u].y;
        float _222 = RVar[3u].z;
        float _224 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _220;
        RVar[0u].z = _222;
        RVar[0u].w = _224;
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
    uint _300 = PS_PUSH.alphaFunc >> 8u;
    if (_300 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_300 == 2u)
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
    uint _328 = PS_PUSH.alphaFunc >> 8u;
    if (_328 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_328 == 2u)
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