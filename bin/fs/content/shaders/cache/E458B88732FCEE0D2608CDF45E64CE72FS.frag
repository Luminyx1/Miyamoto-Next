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
uniform sampler2D tex_map3;
uniform sampler2D tex_map1;
uniform sampler2D tex_map2;

layout(location = 0) in vec4 PARAM_0;
layout(location = 1) in vec4 PARAM_1;
layout(location = 2) in vec4 PARAM_2;
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
    RVar[0u] = PARAM_0;
    RVar[1u] = PARAM_1;
    RVar[2u] = PARAM_2;
    RVar[3u] = PARAM_3;
    RVar[4u] = PARAM_4;
    RVar[5u] = PARAM_5;
    if (stateVar == 0)
    {
        RVar[2u] = texture(tex_map0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
        vec4 _81 = texture(tex_map3, vec4(RVar[5u].xy, 0.0, RVar[5u].x).xy);
        RVar[5u] = vec4(_81.x, _81.y, _81.z, RVar[5u].w);
        vec4 _96 = texture(tex_map1, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_96.x, _96.y, _96.z, RVar[3u].w);
        vec4 _111 = texture(tex_map2, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_111.x, _111.y, _111.z, RVar[4u].w);
    }
    if (stateVar == 0)
    {
        float _129 = RVar[2u].x;
        float _132 = (CBUFFER_1.values[4].x * _129) + uintBitsToFloat(0u);
        float _136 = RVar[2u].z;
        float _139 = (CBUFFER_1.values[4].z * _136) + uintBitsToFloat(0u);
        float _143 = RVar[2u].w;
        float _146 = (CBUFFER_1.values[4].w * _143) + uintBitsToFloat(0u);
        float _150 = RVar[2u].y;
        float _153 = (CBUFFER_1.values[4].y * _150) + uintBitsToFloat(0u);
        RVar[123u].x = _132;
        RVar[123u].y = _139;
        RVar[123u].z = _146;
        RVar[123u].w = _153;
        RVar[6u].w = uintBitsToFloat(1065353216u);
        float _175 = clamp(_146 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].z = clamp(_139 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].w = _175;
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _182 = RVar[5u].y;
        float _185 = (_175 * _182) + uintBitsToFloat(0u);
        float _187 = RVar[5u].x;
        float _190 = (_175 * _187) + uintBitsToFloat(0u);
        float _192 = RVar[3u].x;
        float _197 = RVar[5u].z;
        float _200 = (_175 * _197) + uintBitsToFloat(0u);
        float _202 = RVar[3u].y;
        RVar[123u].x = _185;
        RVar[123u].y = _190;
        RVar[126u].z = (clamp(_132 + uintBitsToFloat(0u), 0.0, 1.0) * _192) + uintBitsToFloat(0u);
        RVar[123u].w = _200;
        RVar[125u].z = (clamp(_153 + uintBitsToFloat(0u), 0.0, 1.0) * _202) + uintBitsToFloat(0u);
        float _219 = RVar[127u].z;
        float _221 = RVar[3u].z;
        float _224 = (_219 * _221) + uintBitsToFloat(0u);
        float _234 = RVar[127u].w;
        float _236 = RVar[4u].x;
        RVar[123u].y = _224;
        RVar[127u].z = (_234 * _236) + uintBitsToFloat(0u);
        float _243 = RVar[126u].z;
        float _249 = RVar[127u].w;
        float _251 = RVar[4u].y;
        float _254 = (_249 * _251) + uintBitsToFloat(0u);
        float _256 = RVar[125u].z;
        float _260 = RVar[127u].w;
        float _262 = RVar[4u].z;
        float _265 = (_260 * _262) + uintBitsToFloat(0u);
        RVar[123u].z = _254;
        RVar[122u].x = _265;
        float _270 = RVar[1u].z;
        float _272 = RVar[1u].z;
        float _279 = RVar[127u].z;
        float _281 = clamp(clamp(clamp(CBUFFER_1.values[7].x + _190, 0.0, 1.0) + _243, 0.0, 1.0) + _279, 0.0, 1.0);
        RVar[127u].y = clamp(clamp(clamp(CBUFFER_1.values[7].z + _200, 0.0, 1.0) + _224, 0.0, 1.0) + _265, 0.0, 1.0);
        RVar[127u].z = clamp(clamp(clamp(CBUFFER_1.values[7].y + _185, 0.0, 1.0) + _256, 0.0, 1.0) + _254, 0.0, 1.0);
        RVar[127u].w = _281;
        float _286 = RVar[1u].x;
        float _288 = RVar[1u].y;
        float _293 = RVar[1u].x;
        float _295 = RVar[1u].y;
        float _311 = RVar[0u].z;
        float _313 = RVar[127u].y;
        float _317 = RVar[0u].y;
        float _319 = RVar[127u].z;
        float _324 = inversesqrt(dot(vec4(_286, _288, _270 * _272, uintBitsToFloat(2147483648u)), vec4(_293, _295, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[6u].x = ((RVar[0u].x + (-_281)) * RVar[0u].w) + RVar[127u].w;
        RVar[127u].x = _324;
        float _334 = RVar[0u].w;
        float _336 = RVar[127u].z;
        float _340 = RVar[0u].w;
        float _342 = RVar[127u].y;
        float _346 = RVar[1u].y;
        RVar[2u].x = (RVar[1u].x * _324) + uintBitsToFloat(1056964608u);
        RVar[6u].y = ((_317 + (-_319)) * _334) + _336;
        RVar[6u].z = ((_311 + (-_313)) * _340) + _342;
        RVar[2u].y = (_346 * _324) + uintBitsToFloat(1056964608u);
        float _355 = RVar[1u].z;
        float _357 = RVar[127u].x;
        float _360 = (_355 * _357) + uintBitsToFloat(1056964608u);
        RVar[2u].z = _360;
        float _365 = RVar[2u].y;
        float _367 = RVar[2u].w;
        RVar[1u].x = RVar[2u].x;
        RVar[1u].y = _365;
        RVar[1u].z = _360;
        RVar[1u].w = _367;
        float _375 = RVar[6u].y;
        float _377 = RVar[6u].z;
        float _379 = RVar[6u].w;
        RVar[0u].x = RVar[6u].x;
        RVar[0u].y = _375;
        RVar[0u].z = _377;
        RVar[0u].w = _379;
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
    uint _455 = PS_PUSH.alphaFunc >> 8u;
    if (_455 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_455 == 2u)
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
    uint _483 = PS_PUSH.alphaFunc >> 8u;
    if (_483 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_483 == 2u)
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