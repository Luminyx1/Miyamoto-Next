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

uniform sampler2D tex_map1;
uniform sampler2D tex_map0;
uniform sampler2D tex_map2;

layout(location = 2) in vec4 PARAM_2;
layout(location = 1) in vec4 PARAM_1;
layout(location = 0) in vec4 PARAM_0;
layout(location = 3) in vec4 PARAM_3;
layout(location = 4) in vec4 PARAM_4;
layout(location = 5) in vec4 PARAM_5;
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
    RVar[1u] = PARAM_1;
    RVar[2u] = PARAM_0;
    RVar[3u] = PARAM_3;
    RVar[4u] = PARAM_4;
    RVar[5u] = PARAM_5;
    if (stateVar == 0)
    {
        vec4 _68 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_68.x, _68.y, _68.z, RVar[4u].w);
        RVar[3u] = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        vec4 _96 = texture(tex_map2, vec4(RVar[5u].xy, 0.0, RVar[5u].x).xy);
        RVar[5u] = vec4(_96.x, _96.y, _96.z, RVar[5u].w);
    }
    if (stateVar == 0)
    {
        float _112 = RVar[0u].z;
        float _114 = RVar[4u].z;
        float _117 = (_112 * _114) + uintBitsToFloat(0u);
        float _119 = RVar[0u].y;
        float _121 = RVar[4u].y;
        float _124 = (_119 * _121) + uintBitsToFloat(0u);
        float _126 = RVar[0u].x;
        float _128 = RVar[4u].x;
        float _131 = (_126 * _128) + uintBitsToFloat(0u);
        float _133 = RVar[5u].y;
        RVar[127u].x = (-RVar[5u].x) + uintBitsToFloat(1065353216u);
        RVar[123u].y = _117;
        RVar[123u].z = _124;
        RVar[123u].w = _131;
        RVar[126u].x = (-_133) + uintBitsToFloat(1065353216u);
        float _165 = RVar[0u].w;
        RVar[127u].y = (-RVar[5u].z) + uintBitsToFloat(1065353216u);
        float _171 = RVar[3u].x;
        float _174 = (clamp((_131 + uintBitsToFloat(0u)) * 4.0, 0.0, 1.0) * _171) + uintBitsToFloat(0u);
        float _176 = RVar[3u].w;
        float _179 = (clamp(_165 + uintBitsToFloat(0u), 0.0, 1.0) * _176) + uintBitsToFloat(0u);
        float _181 = RVar[3u].z;
        float _184 = (clamp((_117 + uintBitsToFloat(0u)) * 4.0, 0.0, 1.0) * _181) + uintBitsToFloat(0u);
        float _186 = RVar[3u].y;
        float _189 = (clamp((_124 + uintBitsToFloat(0u)) * 4.0, 0.0, 1.0) * _186) + uintBitsToFloat(0u);
        RVar[123u].x = _174;
        RVar[123u].y = _179;
        RVar[123u].z = _184;
        RVar[123u].w = _189;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _209 = RVar[2u].z;
        float _211 = RVar[2u].z;
        float _214 = RVar[127u].y;
        float _224 = (clamp(_184 + uintBitsToFloat(0u), 0.0, 1.0) * _214) + CBUFFER_1.values[10].z;
        float _226 = RVar[126u].x;
        float _230 = (clamp(_189 + uintBitsToFloat(0u), 0.0, 1.0) * _226) + CBUFFER_1.values[10].y;
        float _232 = RVar[127u].x;
        float _236 = (clamp(_174 + uintBitsToFloat(0u), 0.0, 1.0) * _232) + CBUFFER_1.values[10].x;
        float _241 = RVar[2u].y;
        float _243 = RVar[2u].y;
        float _245 = (_241 * _243) + (_209 * _211);
        RVar[123u].x = _224;
        RVar[123u].y = _230;
        RVar[123u].z = _236;
        RVar[4u].w = clamp(clamp(_179 + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[122u].x = _245;
        float _253 = RVar[2u].x;
        float _255 = RVar[2u].x;
        float _257 = (_253 * _255) + _245;
        float _259 = RVar[0u].z;
        float _261 = RVar[5u].z;
        float _264 = clamp((_259 * _261) + _224, 0.0, 1.0);
        float _266 = RVar[0u].y;
        float _268 = RVar[5u].y;
        float _271 = clamp((_266 * _268) + _230, 0.0, 1.0);
        float _273 = RVar[0u].x;
        float _275 = RVar[5u].x;
        float _278 = clamp((_273 * _275) + _236, 0.0, 1.0);
        RVar[123u].x = _257;
        RVar[127u].y = _264;
        RVar[127u].z = _271;
        RVar[127u].w = _278;
        float _284 = RVar[1u].x;
        float _288 = RVar[1u].z;
        float _292 = RVar[1u].y;
        float _297 = inversesqrt(_257) * 0.5;
        RVar[127u].x = _297;
        float _306 = RVar[1u].w;
        float _308 = RVar[127u].z;
        float _312 = RVar[1u].w;
        float _314 = RVar[127u].y;
        float _318 = RVar[2u].x;
        RVar[4u].x = ((_284 + (-_278)) * RVar[1u].w) + RVar[127u].w;
        RVar[4u].y = ((_292 + (-_271)) * _306) + _308;
        RVar[4u].z = ((_288 + (-_264)) * _312) + _314;
        RVar[3u].x = (_318 * _297) + uintBitsToFloat(1056964608u);
        float _328 = RVar[2u].y;
        float _330 = RVar[127u].x;
        float _333 = (_328 * _330) + uintBitsToFloat(1056964608u);
        float _335 = RVar[2u].z;
        float _337 = RVar[127u].x;
        float _340 = (_335 * _337) + uintBitsToFloat(1056964608u);
        RVar[3u].y = _333;
        RVar[3u].z = _340;
        float _346 = RVar[3u].w;
        RVar[1u].x = RVar[3u].x;
        RVar[1u].y = _333;
        RVar[1u].z = _340;
        RVar[1u].w = _346;
        float _354 = RVar[4u].y;
        float _356 = RVar[4u].z;
        float _358 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _354;
        RVar[0u].z = _356;
        RVar[0u].w = _358;
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
    uint _434 = PS_PUSH.alphaFunc >> 8u;
    if (_434 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_434 == 2u)
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
    uint _462 = PS_PUSH.alphaFunc >> 8u;
    if (_462 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_462 == 2u)
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