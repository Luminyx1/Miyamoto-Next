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

layout(location = 1) in vec4 PARAM_1;
layout(location = 0) in vec4 PARAM_0;
layout(location = 2) in vec4 PARAM_2;
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
    RVar[2u] = PARAM_2;
    if (stateVar == 0)
    {
        vec4 _56 = texture(tex_map0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
        RVar[2u] = vec4(_56.x, _56.y, _56.z, RVar[2u].w);
    }
    if (stateVar == 0)
    {
        float _66 = RVar[2u].z;
        float _71 = (_66 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _73 = RVar[2u].y;
        float _77 = (_73 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _79 = RVar[2u].x;
        float _83 = (_79 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        RVar[123u].x = _71;
        RVar[123u].y = _77;
        RVar[123u].z = _83;
        RVar[3u].w = clamp(CBUFFER_1.values[4].w + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _105 = RVar[1u].z;
        float _107 = RVar[1u].z;
        float _117 = clamp(_83 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].y = clamp(_71 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].z = clamp(_77 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = _117;
        float _123 = RVar[1u].x;
        float _125 = RVar[1u].y;
        float _130 = RVar[1u].x;
        float _132 = RVar[1u].y;
        float _148 = RVar[0u].z;
        float _150 = RVar[127u].y;
        float _154 = RVar[0u].y;
        float _156 = RVar[127u].z;
        float _161 = inversesqrt(dot(vec4(_123, _125, _105 * _107, uintBitsToFloat(2147483648u)), vec4(_130, _132, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[3u].x = ((RVar[0u].x + (-_117)) * RVar[0u].w) + RVar[127u].w;
        RVar[127u].x = _161;
        float _171 = RVar[0u].w;
        float _173 = RVar[127u].z;
        float _177 = RVar[0u].w;
        float _179 = RVar[127u].y;
        float _183 = RVar[1u].y;
        RVar[2u].x = (RVar[1u].x * _161) + uintBitsToFloat(1056964608u);
        RVar[3u].y = ((_154 + (-_156)) * _171) + _173;
        RVar[3u].z = ((_148 + (-_150)) * _177) + _179;
        RVar[2u].y = (_183 * _161) + uintBitsToFloat(1056964608u);
        float _192 = RVar[1u].z;
        float _194 = RVar[127u].x;
        float _197 = (_192 * _194) + uintBitsToFloat(1056964608u);
        RVar[2u].z = _197;
        float _202 = RVar[2u].y;
        float _204 = RVar[2u].w;
        RVar[1u].x = RVar[2u].x;
        RVar[1u].y = _202;
        RVar[1u].z = _197;
        RVar[1u].w = _204;
        float _212 = RVar[3u].y;
        float _214 = RVar[3u].z;
        float _216 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _212;
        RVar[0u].z = _214;
        RVar[0u].w = _216;
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
    uint _292 = PS_PUSH.alphaFunc >> 8u;
    if (_292 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_292 == 2u)
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
    uint _320 = PS_PUSH.alphaFunc >> 8u;
    if (_320 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_320 == 2u)
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