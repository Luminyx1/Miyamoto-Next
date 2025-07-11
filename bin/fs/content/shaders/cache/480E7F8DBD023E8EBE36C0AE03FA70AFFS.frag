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
        float _66 = RVar[2u].y;
        float _72 = RVar[2u].x;
        float _77 = RVar[1u].z;
        float _79 = RVar[1u].z;
        float _82 = RVar[2u].z;
        RVar[4u].w = uintBitsToFloat(0u);
        float _100 = (CBUFFER_1.values[4].z * ((-_82) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _105 = (CBUFFER_1.values[4].y * ((-_66) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _110 = (CBUFFER_1.values[4].x * ((-_72) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _113 = RVar[1u].y;
        float _115 = RVar[1u].y;
        float _117 = (_113 * _115) + (_77 * _79);
        RVar[123u].x = _100;
        RVar[123u].y = _105;
        RVar[123u].z = _110;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        RVar[122u].x = _117;
        float _126 = RVar[1u].x;
        float _128 = RVar[1u].x;
        float _130 = (_126 * _128) + _117;
        float _135 = RVar[2u].z;
        float _139 = clamp((CBUFFER_1.values[5].z * _135) + _100, 0.0, 1.0);
        float _143 = RVar[2u].y;
        float _146 = clamp((CBUFFER_1.values[5].y * _143) + _105, 0.0, 1.0);
        float _150 = RVar[2u].x;
        float _153 = clamp((CBUFFER_1.values[5].x * _150) + _110, 0.0, 1.0);
        RVar[123u].x = _130;
        RVar[127u].y = _139;
        RVar[127u].z = _146;
        RVar[127u].w = _153;
        float _160 = RVar[0u].x;
        float _164 = RVar[0u].z;
        float _168 = RVar[0u].y;
        float _173 = inversesqrt(_130) * 0.5;
        RVar[127u].x = _173;
        float _182 = RVar[0u].w;
        float _184 = RVar[127u].z;
        float _188 = RVar[0u].w;
        float _190 = RVar[127u].y;
        float _194 = RVar[1u].x;
        RVar[4u].x = ((_160 + (-_153)) * RVar[0u].w) + RVar[127u].w;
        RVar[4u].y = ((_168 + (-_146)) * _182) + _184;
        RVar[4u].z = ((_164 + (-_139)) * _188) + _190;
        RVar[3u].x = (_194 * _173) + uintBitsToFloat(1056964608u);
        float _204 = RVar[1u].y;
        float _206 = RVar[127u].x;
        float _209 = (_204 * _206) + uintBitsToFloat(1056964608u);
        float _211 = RVar[1u].z;
        float _213 = RVar[127u].x;
        float _216 = (_211 * _213) + uintBitsToFloat(1056964608u);
        RVar[3u].y = _209;
        RVar[3u].z = _216;
        float _222 = RVar[3u].w;
        RVar[1u].x = RVar[3u].x;
        RVar[1u].y = _209;
        RVar[1u].z = _216;
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