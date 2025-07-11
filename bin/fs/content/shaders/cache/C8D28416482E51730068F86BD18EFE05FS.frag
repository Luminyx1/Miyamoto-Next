#version 430

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
        float _65 = RVar[2u].w;
        float _70 = (_65 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _72 = RVar[2u].z;
        float _76 = (_72 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _78 = RVar[2u].y;
        float _82 = (_78 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _84 = RVar[2u].x;
        float _88 = (_84 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        RVar[123u].x = _70;
        RVar[123u].y = _76;
        RVar[123u].z = _82;
        RVar[123u].w = _88;
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _99 = clamp(_88 + uintBitsToFloat(0u), 0.0, 1.0);
        float _101 = RVar[1u].z;
        float _103 = RVar[1u].z;
        RVar[127u].x = _99;
        RVar[127u].z = clamp(_76 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = clamp(_82 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[3u].w = clamp(_70 + uintBitsToFloat(0u), 0.0, 1.0);
        float _120 = RVar[1u].x;
        float _122 = RVar[1u].y;
        float _127 = RVar[1u].x;
        float _129 = RVar[1u].y;
        float _145 = RVar[0u].z;
        float _147 = RVar[127u].z;
        float _151 = RVar[0u].y;
        float _153 = RVar[127u].w;
        float _158 = inversesqrt(dot(vec4(_120, _122, _101 * _103, uintBitsToFloat(2147483648u)), vec4(_127, _129, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[3u].x = ((RVar[0u].x + (-_99)) * RVar[0u].w) + RVar[127u].x;
        RVar[127u].x = _158;
        float _168 = RVar[0u].w;
        float _170 = RVar[127u].w;
        float _174 = RVar[0u].w;
        float _176 = RVar[127u].z;
        float _180 = RVar[1u].y;
        RVar[2u].x = (RVar[1u].x * _158) + uintBitsToFloat(1056964608u);
        RVar[3u].y = ((_151 + (-_153)) * _168) + _170;
        RVar[3u].z = ((_145 + (-_147)) * _174) + _176;
        RVar[2u].y = (_180 * _158) + uintBitsToFloat(1056964608u);
        float _189 = RVar[1u].z;
        float _191 = RVar[127u].x;
        float _194 = (_189 * _191) + uintBitsToFloat(1056964608u);
        RVar[2u].z = _194;
        float _199 = RVar[2u].y;
        float _201 = RVar[2u].w;
        RVar[1u].x = RVar[2u].x;
        RVar[1u].y = _199;
        RVar[1u].z = _194;
        RVar[1u].w = _201;
        float _209 = RVar[3u].y;
        float _211 = RVar[3u].z;
        float _213 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _209;
        RVar[0u].z = _211;
        RVar[0u].w = _213;
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
    uint _289 = PS_PUSH.alphaFunc >> 8u;
    if (_289 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_289 == 2u)
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
    uint _317 = PS_PUSH.alphaFunc >> 8u;
    if (_317 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_317 == 2u)
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