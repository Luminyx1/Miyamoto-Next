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
    RVar[0u] = PARAM_0;
    RVar[1u] = PARAM_1;
    RVar[2u] = PARAM_2;
    if (stateVar == 0)
    {
        RVar[2u] = texture(tex_map0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
    }
    if (stateVar == 0)
    {
        float _64 = RVar[2u].z;
        float _70 = RVar[2u].y;
        float _75 = RVar[2u].x;
        float _81 = RVar[2u].w;
        float _85 = (_81 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        RVar[123u].w = _85;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _91 = RVar[1u].z;
        float _93 = RVar[1u].z;
        float _105 = (CBUFFER_1.values[5].z * ((-_64) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _110 = (CBUFFER_1.values[5].y * ((-_70) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _115 = (CBUFFER_1.values[5].x * ((-_75) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        RVar[123u].y = _105;
        RVar[123u].z = _110;
        RVar[123u].w = _115;
        RVar[4u].w = clamp(_85 + uintBitsToFloat(0u), 0.0, 1.0);
        float _129 = RVar[2u].x;
        float _132 = clamp((CBUFFER_1.values[4].x * _129) + _115, 0.0, 1.0);
        float _136 = RVar[2u].z;
        float _139 = clamp((CBUFFER_1.values[4].z * _136) + _105, 0.0, 1.0);
        float _143 = RVar[2u].y;
        float _146 = clamp((CBUFFER_1.values[4].y * _143) + _110, 0.0, 1.0);
        float _148 = RVar[1u].y;
        float _150 = RVar[1u].y;
        float _152 = (_148 * _150) + (_91 * _93);
        RVar[127u].x = _132;
        RVar[127u].z = _139;
        RVar[127u].w = _146;
        RVar[122u].x = _152;
        float _160 = RVar[0u].x;
        float _164 = RVar[1u].x;
        float _166 = RVar[1u].x;
        float _168 = (_164 * _166) + _152;
        float _170 = RVar[0u].z;
        float _174 = RVar[0u].y;
        RVar[123u].y = _168;
        float _185 = RVar[0u].w;
        float _187 = RVar[127u].w;
        float _191 = RVar[0u].w;
        float _193 = RVar[127u].z;
        float _198 = inversesqrt(_168) * 0.5;
        RVar[4u].x = ((_160 + (-_132)) * RVar[0u].w) + RVar[127u].x;
        RVar[4u].y = ((_174 + (-_146)) * _185) + _187;
        RVar[4u].z = ((_170 + (-_139)) * _191) + _193;
        float _203 = RVar[1u].x;
        float _207 = (_203 * _198) + uintBitsToFloat(1056964608u);
        float _209 = RVar[1u].y;
        float _212 = (_209 * _198) + uintBitsToFloat(1056964608u);
        float _214 = RVar[1u].z;
        float _217 = (_214 * _198) + uintBitsToFloat(1056964608u);
        RVar[3u].x = _207;
        RVar[3u].y = _212;
        RVar[3u].z = _217;
        float _222 = RVar[3u].w;
        RVar[1u].x = _207;
        RVar[1u].y = _212;
        RVar[1u].z = _217;
        RVar[1u].w = _222;
        float _230 = RVar[4u].y;
        float _232 = RVar[4u].z;
        float _234 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _230;
        RVar[0u].z = _232;
        RVar[0u].w = _234;
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
    uint _310 = PS_PUSH.alphaFunc >> 8u;
    if (_310 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_310 == 2u)
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
    uint _338 = PS_PUSH.alphaFunc >> 8u;
    if (_338 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_338 == 2u)
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