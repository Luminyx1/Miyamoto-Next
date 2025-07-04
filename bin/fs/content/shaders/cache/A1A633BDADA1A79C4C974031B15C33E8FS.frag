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
        float _161 = RVar[0u].w;
        RVar[127u].y = (-RVar[5u].z) + uintBitsToFloat(1065353216u);
        float _167 = RVar[3u].x;
        float _170 = (clamp(_131 + uintBitsToFloat(0u), 0.0, 1.0) * _167) + uintBitsToFloat(0u);
        float _172 = RVar[3u].w;
        float _175 = (clamp(_161 + uintBitsToFloat(0u), 0.0, 1.0) * _172) + uintBitsToFloat(0u);
        float _177 = RVar[3u].z;
        float _180 = (clamp(_117 + uintBitsToFloat(0u), 0.0, 1.0) * _177) + uintBitsToFloat(0u);
        float _182 = RVar[3u].y;
        float _185 = (clamp(_124 + uintBitsToFloat(0u), 0.0, 1.0) * _182) + uintBitsToFloat(0u);
        RVar[123u].x = _170;
        RVar[123u].y = _175;
        RVar[123u].z = _180;
        RVar[123u].w = _185;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _205 = RVar[2u].z;
        float _207 = RVar[2u].z;
        float _210 = RVar[127u].y;
        float _220 = (clamp(_180 + uintBitsToFloat(0u), 0.0, 1.0) * _210) + CBUFFER_1.values[10].z;
        float _222 = RVar[126u].x;
        float _226 = (clamp(_185 + uintBitsToFloat(0u), 0.0, 1.0) * _222) + CBUFFER_1.values[10].y;
        float _228 = RVar[127u].x;
        float _232 = (clamp(_170 + uintBitsToFloat(0u), 0.0, 1.0) * _228) + CBUFFER_1.values[10].x;
        float _237 = RVar[2u].y;
        float _239 = RVar[2u].y;
        float _241 = (_237 * _239) + (_205 * _207);
        RVar[123u].x = _220;
        RVar[123u].y = _226;
        RVar[123u].z = _232;
        RVar[4u].w = clamp(clamp(_175 + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[122u].x = _241;
        float _249 = RVar[2u].x;
        float _251 = RVar[2u].x;
        float _253 = (_249 * _251) + _241;
        float _255 = RVar[0u].z;
        float _257 = RVar[5u].z;
        float _260 = clamp((_255 * _257) + _220, 0.0, 1.0);
        float _262 = RVar[0u].y;
        float _264 = RVar[5u].y;
        float _267 = clamp((_262 * _264) + _226, 0.0, 1.0);
        float _269 = RVar[0u].x;
        float _271 = RVar[5u].x;
        float _274 = clamp((_269 * _271) + _232, 0.0, 1.0);
        RVar[123u].x = _253;
        RVar[127u].y = _260;
        RVar[127u].z = _267;
        RVar[127u].w = _274;
        float _280 = RVar[1u].x;
        float _284 = RVar[1u].z;
        float _288 = RVar[1u].y;
        float _293 = inversesqrt(_253) * 0.5;
        RVar[127u].x = _293;
        float _302 = RVar[1u].w;
        float _304 = RVar[127u].z;
        float _308 = RVar[1u].w;
        float _310 = RVar[127u].y;
        float _314 = RVar[2u].x;
        RVar[4u].x = ((_280 + (-_274)) * RVar[1u].w) + RVar[127u].w;
        RVar[4u].y = ((_288 + (-_267)) * _302) + _304;
        RVar[4u].z = ((_284 + (-_260)) * _308) + _310;
        RVar[3u].x = (_314 * _293) + uintBitsToFloat(1056964608u);
        float _324 = RVar[2u].y;
        float _326 = RVar[127u].x;
        float _329 = (_324 * _326) + uintBitsToFloat(1056964608u);
        float _331 = RVar[2u].z;
        float _333 = RVar[127u].x;
        float _336 = (_331 * _333) + uintBitsToFloat(1056964608u);
        RVar[3u].y = _329;
        RVar[3u].z = _336;
        float _342 = RVar[3u].w;
        RVar[1u].x = RVar[3u].x;
        RVar[1u].y = _329;
        RVar[1u].z = _336;
        RVar[1u].w = _342;
        float _350 = RVar[4u].y;
        float _352 = RVar[4u].z;
        float _354 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _350;
        RVar[0u].z = _352;
        RVar[0u].w = _354;
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
    uint _430 = PS_PUSH.alphaFunc >> 8u;
    if (_430 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_430 == 2u)
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
    uint _458 = PS_PUSH.alphaFunc >> 8u;
    if (_458 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_458 == 2u)
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