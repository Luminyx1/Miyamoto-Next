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

layout(location = 2) in vec4 PARAM_2;
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
    RVar[0u] = PARAM_2;
    RVar[1u] = PARAM_0;
    RVar[2u] = PARAM_1;
    RVar[3u] = PARAM_3;
    if (stateVar == 0)
    {
        RVar[3u] = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
    }
    if (stateVar == 0)
    {
        float _68 = RVar[3u].z;
        float _74 = RVar[3u].y;
        float _79 = RVar[3u].x;
        float _84 = RVar[0u].w;
        float _86 = RVar[3u].w;
        float _89 = (_84 * _86) + uintBitsToFloat(0u);
        RVar[123u].w = _89;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _95 = RVar[2u].z;
        float _97 = RVar[2u].z;
        float _109 = (CBUFFER_1.values[5].z * ((-_68) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _114 = (CBUFFER_1.values[5].y * ((-_74) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _119 = (CBUFFER_1.values[5].x * ((-_79) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        RVar[123u].y = _109;
        RVar[123u].z = _114;
        RVar[123u].w = _119;
        RVar[4u].w = clamp(_89 + uintBitsToFloat(0u), 0.0, 1.0);
        float _133 = RVar[3u].x;
        float _136 = clamp((CBUFFER_1.values[4].x * _133) + _119, 0.0, 1.0);
        float _140 = RVar[3u].z;
        float _143 = clamp((CBUFFER_1.values[4].z * _140) + _109, 0.0, 1.0);
        float _147 = RVar[3u].y;
        float _150 = clamp((CBUFFER_1.values[4].y * _147) + _114, 0.0, 1.0);
        float _152 = RVar[2u].y;
        float _154 = RVar[2u].y;
        float _156 = (_152 * _154) + (_95 * _97);
        RVar[127u].x = _136;
        RVar[127u].z = _143;
        RVar[127u].w = _150;
        RVar[122u].x = _156;
        float _164 = RVar[1u].x;
        float _168 = RVar[2u].x;
        float _170 = RVar[2u].x;
        float _172 = (_168 * _170) + _156;
        float _174 = RVar[1u].z;
        float _178 = RVar[1u].y;
        RVar[123u].y = _172;
        float _189 = RVar[1u].w;
        float _191 = RVar[127u].w;
        float _195 = RVar[1u].w;
        float _197 = RVar[127u].z;
        float _202 = inversesqrt(_172) * 0.5;
        RVar[4u].x = ((_164 + (-_136)) * RVar[1u].w) + RVar[127u].x;
        RVar[4u].y = ((_178 + (-_150)) * _189) + _191;
        RVar[4u].z = ((_174 + (-_143)) * _195) + _197;
        float _207 = RVar[2u].x;
        float _211 = (_207 * _202) + uintBitsToFloat(1056964608u);
        float _213 = RVar[2u].y;
        float _216 = (_213 * _202) + uintBitsToFloat(1056964608u);
        float _218 = RVar[2u].z;
        float _221 = (_218 * _202) + uintBitsToFloat(1056964608u);
        RVar[0u].x = _211;
        RVar[0u].y = _216;
        RVar[0u].z = _221;
        float _226 = RVar[0u].w;
        RVar[1u].x = _211;
        RVar[1u].y = _216;
        RVar[1u].z = _221;
        RVar[1u].w = _226;
        float _234 = RVar[4u].y;
        float _236 = RVar[4u].z;
        float _238 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _234;
        RVar[0u].z = _236;
        RVar[0u].w = _238;
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
    uint _314 = PS_PUSH.alphaFunc >> 8u;
    if (_314 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_314 == 2u)
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
    uint _342 = PS_PUSH.alphaFunc >> 8u;
    if (_342 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_342 == 2u)
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