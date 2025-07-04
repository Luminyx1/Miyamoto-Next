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
uniform sampler2D tex_map2;
uniform sampler2D tex_map1;

layout(location = 0) in vec4 PARAM_0;
layout(location = 1) in vec4 PARAM_1;
layout(location = 2) in vec4 PARAM_2;
layout(location = 3) in vec4 PARAM_3;
layout(location = 4) in vec4 PARAM_4;
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
    RVar[3u] = PARAM_3;
    RVar[4u] = PARAM_4;
    if (stateVar == 0)
    {
        vec4 _64 = texture(tex_map0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
        RVar[2u] = vec4(_64.x, _64.y, _64.z, RVar[2u].w);
        vec4 _79 = texture(tex_map2, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_79.x, _79.y, _79.z, RVar[4u].w);
        vec4 _94 = texture(tex_map1, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_94.x, _94.y, _94.z, RVar[3u].w);
    }
    if (stateVar == 0)
    {
        float _112 = RVar[2u].z;
        float _115 = (CBUFFER_1.values[4].z * _112) + uintBitsToFloat(0u);
        float _119 = RVar[2u].y;
        float _122 = (CBUFFER_1.values[4].w * _119) + uintBitsToFloat(0u);
        float _126 = RVar[2u].y;
        float _129 = (CBUFFER_1.values[4].y * _126) + uintBitsToFloat(0u);
        float _133 = RVar[2u].x;
        float _136 = (CBUFFER_1.values[4].x * _133) + uintBitsToFloat(0u);
        RVar[123u].x = _115;
        RVar[123u].y = _122;
        RVar[123u].z = _129;
        RVar[123u].w = _136;
        RVar[5u].w = uintBitsToFloat(1065353216u);
        float _149 = clamp(_122 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].z = clamp(_115 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _169 = RVar[4u].z;
        float _172 = (_149 * _169) + uintBitsToFloat(0u);
        float _174 = RVar[4u].y;
        float _177 = (_149 * _174) + uintBitsToFloat(0u);
        float _179 = RVar[4u].x;
        float _182 = (_149 * _179) + uintBitsToFloat(0u);
        float _184 = RVar[3u].y;
        RVar[127u].x = (clamp(_136 + uintBitsToFloat(0u), 0.0, 1.0) * RVar[3u].x) + uintBitsToFloat(0u);
        RVar[123u].y = _172;
        RVar[123u].z = _177;
        RVar[123u].w = _182;
        RVar[127u].y = (clamp(_129 + uintBitsToFloat(0u), 0.0, 1.0) * _184) + uintBitsToFloat(0u);
        float _194 = RVar[127u].z;
        float _196 = RVar[3u].z;
        float _199 = (_194 * _196) + uintBitsToFloat(0u);
        float _214 = RVar[1u].z;
        float _216 = RVar[1u].z;
        RVar[123u].x = _199;
        float _220 = RVar[1u].y;
        float _222 = RVar[1u].y;
        float _224 = (_220 * _222) + (_214 * _216);
        float _226 = clamp(clamp(CBUFFER_1.values[10].z + _172, 0.0, 1.0) + _199, 0.0, 1.0);
        float _228 = RVar[127u].y;
        float _230 = clamp(clamp(CBUFFER_1.values[10].y + _177, 0.0, 1.0) + _228, 0.0, 1.0);
        float _232 = RVar[127u].x;
        float _234 = clamp(clamp(CBUFFER_1.values[10].x + _182, 0.0, 1.0) + _232, 0.0, 1.0);
        RVar[123u].x = _224;
        RVar[127u].y = _226;
        RVar[127u].z = _230;
        RVar[127u].w = _234;
        float _240 = RVar[0u].x;
        float _244 = RVar[1u].x;
        float _246 = RVar[1u].x;
        float _248 = (_244 * _246) + _224;
        float _250 = RVar[0u].z;
        float _254 = RVar[0u].y;
        RVar[123u].y = _248;
        float _265 = RVar[0u].w;
        float _267 = RVar[127u].z;
        float _271 = RVar[0u].w;
        float _273 = RVar[127u].y;
        float _278 = inversesqrt(_248) * 0.5;
        RVar[5u].x = ((_240 + (-_234)) * RVar[0u].w) + RVar[127u].w;
        RVar[5u].y = ((_254 + (-_230)) * _265) + _267;
        RVar[5u].z = ((_250 + (-_226)) * _271) + _273;
        float _283 = RVar[1u].x;
        float _287 = (_283 * _278) + uintBitsToFloat(1056964608u);
        float _289 = RVar[1u].y;
        float _292 = (_289 * _278) + uintBitsToFloat(1056964608u);
        float _294 = RVar[1u].z;
        float _297 = (_294 * _278) + uintBitsToFloat(1056964608u);
        RVar[2u].x = _287;
        RVar[2u].y = _292;
        RVar[2u].z = _297;
        float _302 = RVar[2u].w;
        RVar[1u].x = _287;
        RVar[1u].y = _292;
        RVar[1u].z = _297;
        RVar[1u].w = _302;
        float _310 = RVar[5u].y;
        float _312 = RVar[5u].z;
        float _314 = RVar[5u].w;
        RVar[0u].x = RVar[5u].x;
        RVar[0u].y = _310;
        RVar[0u].z = _312;
        RVar[0u].w = _314;
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
    uint _390 = PS_PUSH.alphaFunc >> 8u;
    if (_390 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_390 == 2u)
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
    uint _418 = PS_PUSH.alphaFunc >> 8u;
    if (_418 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_418 == 2u)
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