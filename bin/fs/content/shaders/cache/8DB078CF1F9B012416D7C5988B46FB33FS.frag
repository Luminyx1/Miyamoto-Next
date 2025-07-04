#version 430

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D tex_map1;
uniform sampler2D tex_map2;
uniform sampler2D tex_map0;
uniform sampler2D tex_map3;

layout(location = 2) in vec4 PARAM_2;
layout(location = 1) in vec4 PARAM_1;
layout(location = 0) in vec4 PARAM_0;
layout(location = 3) in vec4 PARAM_3;
layout(location = 4) in vec4 PARAM_4;
layout(location = 5) in vec4 PARAM_5;
layout(location = 6) in vec4 PARAM_6;
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
    RVar[6u] = PARAM_6;
    if (stateVar == 0)
    {
        vec4 _72 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_72.x, _72.y, _72.z, RVar[4u].w);
        vec4 _87 = texture(tex_map2, vec4(RVar[5u].xy, 0.0, RVar[5u].x).xy);
        RVar[5u] = vec4(_87.x, _87.y, _87.z, RVar[5u].w);
        vec4 _102 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_102.x, _102.y, _102.z, RVar[3u].w);
        vec4 _117 = texture(tex_map3, vec4(RVar[6u].xy, 0.0, RVar[6u].x).xy);
        RVar[6u] = vec4(_117.x, _117.y, _117.z, RVar[6u].w);
    }
    if (stateVar == 0)
    {
        float _127 = RVar[0u].y;
        float _129 = RVar[4u].y;
        float _132 = (_127 * _129) + uintBitsToFloat(0u);
        float _134 = RVar[0u].x;
        float _136 = RVar[4u].x;
        float _139 = (_134 * _136) + uintBitsToFloat(0u);
        float _141 = RVar[0u].x;
        float _143 = RVar[5u].x;
        float _146 = (_141 * _143) + uintBitsToFloat(0u);
        float _148 = RVar[0u].z;
        float _150 = RVar[4u].z;
        float _153 = (_148 * _150) + uintBitsToFloat(0u);
        float _155 = RVar[0u].y;
        float _157 = RVar[5u].y;
        RVar[123u].x = _132;
        RVar[123u].y = _139;
        RVar[123u].z = _146;
        RVar[123u].w = _153;
        RVar[127u].w = (_155 * _157) + uintBitsToFloat(0u);
        float _179 = RVar[0u].z;
        float _181 = RVar[5u].z;
        float _184 = (_179 * _181) + uintBitsToFloat(0u);
        RVar[123u].w = _184;
        RVar[127u].y = clamp(_146 + uintBitsToFloat(0u), 0.0, 1.0);
        float _191 = RVar[127u].w;
        float _201 = RVar[3u].y;
        float _206 = RVar[3u].x;
        float _209 = (clamp(_139 + uintBitsToFloat(0u), 0.0, 1.0) * _206) + uintBitsToFloat(0u);
        RVar[126u].y = (clamp(_153 + uintBitsToFloat(0u), 0.0, 1.0) * RVar[3u].z) + uintBitsToFloat(0u);
        RVar[127u].z = (clamp(_132 + uintBitsToFloat(0u), 0.0, 1.0) * _201) + uintBitsToFloat(0u);
        RVar[123u].w = _209;
        float _223 = RVar[6u].y;
        float _228 = RVar[127u].y;
        float _230 = RVar[6u].x;
        float _233 = (_228 * _230) + uintBitsToFloat(0u);
        float _235 = RVar[0u].w;
        RVar[127u].x = (clamp(_184 + uintBitsToFloat(0u), 0.0, 1.0) * RVar[6u].z) + uintBitsToFloat(0u);
        RVar[127u].y = (clamp(_191 + uintBitsToFloat(0u), 0.0, 1.0) * _223) + uintBitsToFloat(0u);
        RVar[123u].z = _233;
        float _246 = clamp(clamp(_209 + uintBitsToFloat(0u), 0.0, 1.0) + _233, 0.0, 1.0);
        float _251 = RVar[126u].y;
        float _256 = RVar[127u].z;
        RVar[126u].x = _246;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _269 = RVar[127u].x;
        float _273 = RVar[127u].y;
        float _275 = clamp(clamp(_256 + uintBitsToFloat(0u), 0.0, 1.0) + _273, 0.0, 1.0);
        float _280 = RVar[2u].z;
        float _282 = RVar[2u].z;
        RVar[127u].x = RVar[1u].x + (-_246);
        RVar[127u].y = clamp(clamp(_251 + uintBitsToFloat(0u), 0.0, 1.0) + _269, 0.0, 1.0);
        RVar[127u].z = _275;
        RVar[127u].w = clamp(clamp(clamp(_235 + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0);
        float _289 = RVar[2u].x;
        float _291 = RVar[2u].y;
        float _296 = RVar[2u].x;
        float _298 = RVar[2u].y;
        float _304 = RVar[1u].y;
        float _316 = RVar[1u].w;
        float _318 = RVar[127u].z;
        float _322 = RVar[1u].z;
        float _324 = RVar[127u].y;
        float _328 = RVar[127u].w;
        float _334 = inversesqrt(dot(vec4(_289, _291, _280 * _282, uintBitsToFloat(2147483648u)), vec4(_296, _298, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[6u].x = (RVar[127u].x * RVar[1u].w) + RVar[126u].x;
        RVar[6u].y = ((_304 + (-_275)) * _316) + _318;
        RVar[6u].w = clamp(_328 + uintBitsToFloat(0u), 0.0, 1.0);
        float _339 = RVar[2u].x;
        float _343 = (_339 * _334) + uintBitsToFloat(1056964608u);
        float _345 = RVar[2u].y;
        float _348 = (_345 * _334) + uintBitsToFloat(1056964608u);
        float _350 = RVar[1u].w;
        float _352 = RVar[127u].y;
        float _356 = RVar[2u].z;
        float _359 = (_356 * _334) + uintBitsToFloat(1056964608u);
        RVar[0u].x = _343;
        RVar[0u].y = _348;
        RVar[6u].z = ((_322 + (-_324)) * _350) + _352;
        RVar[0u].z = _359;
        float _365 = RVar[0u].w;
        RVar[1u].x = _343;
        RVar[1u].y = _348;
        RVar[1u].z = _359;
        RVar[1u].w = _365;
        float _373 = RVar[6u].y;
        float _375 = RVar[6u].z;
        float _377 = RVar[6u].w;
        RVar[0u].x = RVar[6u].x;
        RVar[0u].y = _373;
        RVar[0u].z = _375;
        RVar[0u].w = _377;
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
    uint _453 = PS_PUSH.alphaFunc >> 8u;
    if (_453 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_453 == 2u)
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
    uint _481 = PS_PUSH.alphaFunc >> 8u;
    if (_481 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_481 == 2u)
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