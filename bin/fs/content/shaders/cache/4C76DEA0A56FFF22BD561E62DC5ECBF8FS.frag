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
        float _66 = RVar[2u].z;
        float _72 = RVar[2u].y;
        float _77 = RVar[2u].x;
        float _93 = (CBUFFER_1.values[4].w * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        RVar[123u].w = _93;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _99 = RVar[1u].z;
        float _101 = RVar[1u].z;
        float _108 = (CBUFFER_1.values[5].z * ((-_66) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _113 = (CBUFFER_1.values[5].y * ((-_72) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _118 = (CBUFFER_1.values[5].x * ((-_77) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        RVar[123u].y = _108;
        RVar[123u].z = _113;
        RVar[123u].w = _118;
        RVar[4u].w = clamp(_93 + uintBitsToFloat(0u), 0.0, 1.0);
        float _131 = RVar[2u].x;
        float _134 = clamp((CBUFFER_1.values[4].x * _131) + _118, 0.0, 1.0);
        float _138 = RVar[2u].z;
        float _141 = clamp((CBUFFER_1.values[4].z * _138) + _108, 0.0, 1.0);
        float _145 = RVar[2u].y;
        float _148 = clamp((CBUFFER_1.values[4].y * _145) + _113, 0.0, 1.0);
        float _150 = RVar[1u].y;
        float _152 = RVar[1u].y;
        float _154 = (_150 * _152) + (_99 * _101);
        RVar[127u].x = _134;
        RVar[127u].z = _141;
        RVar[127u].w = _148;
        RVar[122u].x = _154;
        float _162 = RVar[0u].x;
        float _166 = RVar[1u].x;
        float _168 = RVar[1u].x;
        float _170 = (_166 * _168) + _154;
        float _172 = RVar[0u].z;
        float _176 = RVar[0u].y;
        RVar[123u].y = _170;
        float _187 = RVar[0u].w;
        float _189 = RVar[127u].w;
        float _193 = RVar[0u].w;
        float _195 = RVar[127u].z;
        float _200 = inversesqrt(_170) * 0.5;
        RVar[4u].x = ((_162 + (-_134)) * RVar[0u].w) + RVar[127u].x;
        RVar[4u].y = ((_176 + (-_148)) * _187) + _189;
        RVar[4u].z = ((_172 + (-_141)) * _193) + _195;
        float _205 = RVar[1u].x;
        float _209 = (_205 * _200) + uintBitsToFloat(1056964608u);
        float _211 = RVar[1u].y;
        float _214 = (_211 * _200) + uintBitsToFloat(1056964608u);
        float _216 = RVar[1u].z;
        float _219 = (_216 * _200) + uintBitsToFloat(1056964608u);
        RVar[3u].x = _209;
        RVar[3u].y = _214;
        RVar[3u].z = _219;
        float _224 = RVar[3u].w;
        RVar[1u].x = _209;
        RVar[1u].y = _214;
        RVar[1u].z = _219;
        RVar[1u].w = _224;
        float _232 = RVar[4u].y;
        float _234 = RVar[4u].z;
        float _236 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _232;
        RVar[0u].z = _234;
        RVar[0u].w = _236;
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
    uint _312 = PS_PUSH.alphaFunc >> 8u;
    if (_312 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_312 == 2u)
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
    uint _340 = PS_PUSH.alphaFunc >> 8u;
    if (_340 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_340 == 2u)
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