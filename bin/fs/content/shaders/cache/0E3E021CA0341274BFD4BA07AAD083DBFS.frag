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
        float _106 = RVar[0u].x;
        float _108 = RVar[4u].x;
        float _111 = (_106 * _108) + uintBitsToFloat(0u);
        float _113 = RVar[0u].w;
        float _119 = RVar[0u].z;
        float _121 = RVar[4u].z;
        float _124 = (_119 * _121) + uintBitsToFloat(0u);
        float _126 = RVar[0u].y;
        float _128 = RVar[4u].y;
        float _131 = (_126 * _128) + uintBitsToFloat(0u);
        float _133 = RVar[5u].x;
        RVar[123u].x = _111;
        RVar[127u].y = clamp(_113 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[123u].z = _124;
        RVar[123u].w = _131;
        RVar[127u].z = (-_133) + uintBitsToFloat(1065353216u);
        float _160 = RVar[5u].z;
        RVar[126u].z = (-RVar[5u].y) + uintBitsToFloat(1065353216u);
        RVar[127u].x = (-_160) + uintBitsToFloat(1065353216u);
        float _168 = RVar[3u].y;
        float _171 = (clamp(_131 + uintBitsToFloat(0u), 0.0, 1.0) * _168) + uintBitsToFloat(0u);
        float _173 = RVar[3u].x;
        float _176 = (clamp(_111 + uintBitsToFloat(0u), 0.0, 1.0) * _173) + uintBitsToFloat(0u);
        float _178 = RVar[127u].y;
        float _180 = RVar[3u].w;
        float _183 = (_178 * _180) + uintBitsToFloat(0u);
        float _185 = RVar[3u].z;
        float _188 = (clamp(_124 + uintBitsToFloat(0u), 0.0, 1.0) * _185) + uintBitsToFloat(0u);
        RVar[123u].x = _171;
        RVar[123u].y = _176;
        RVar[123u].z = _183;
        RVar[123u].w = _188;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _208 = RVar[2u].z;
        float _210 = RVar[2u].z;
        float _213 = RVar[2u].y;
        float _215 = RVar[2u].y;
        float _217 = (_213 * _215) + (_208 * _210);
        float _219 = RVar[127u].x;
        float _229 = (clamp(_188 + uintBitsToFloat(0u), 0.0, 1.0) * _219) + CBUFFER_1.values[10].z;
        float _231 = RVar[126u].z;
        float _235 = (clamp(_171 + uintBitsToFloat(0u), 0.0, 1.0) * _231) + CBUFFER_1.values[10].y;
        float _237 = RVar[127u].z;
        float _241 = (clamp(_176 + uintBitsToFloat(0u), 0.0, 1.0) * _237) + CBUFFER_1.values[10].x;
        float _246 = (clamp(_183 + uintBitsToFloat(0u), 0.0, 1.0) * CBUFFER_1.values[10].w) + uintBitsToFloat(0u);
        RVar[123u].x = _217;
        RVar[123u].y = _229;
        RVar[123u].z = _235;
        RVar[123u].w = _241;
        RVar[122u].x = _246;
        float _254 = RVar[0u].x;
        float _256 = RVar[5u].x;
        float _259 = clamp((_254 * _256) + _241, 0.0, 1.0);
        float _261 = RVar[2u].x;
        float _263 = RVar[2u].x;
        float _265 = (_261 * _263) + _217;
        float _267 = RVar[0u].z;
        float _269 = RVar[5u].z;
        float _272 = clamp((_267 * _269) + _229, 0.0, 1.0);
        float _274 = RVar[0u].y;
        float _276 = RVar[5u].y;
        float _279 = clamp((_274 * _276) + _235, 0.0, 1.0);
        RVar[127u].x = _259;
        RVar[123u].y = _265;
        RVar[127u].z = _272;
        RVar[127u].w = _279;
        RVar[0u].w = clamp(_246 + uintBitsToFloat(0u), 0.0, 1.0);
        float _289 = RVar[1u].x;
        float _293 = RVar[1u].z;
        float _297 = RVar[1u].y;
        float _302 = inversesqrt(_265) * 0.5;
        RVar[126u].x = _302;
        float _311 = RVar[1u].w;
        float _313 = RVar[127u].w;
        float _317 = RVar[1u].w;
        float _319 = RVar[127u].z;
        float _323 = RVar[2u].x;
        RVar[0u].x = ((_289 + (-_259)) * RVar[1u].w) + RVar[127u].x;
        RVar[0u].y = ((_297 + (-_279)) * _311) + _313;
        RVar[0u].z = ((_293 + (-_272)) * _317) + _319;
        RVar[3u].x = (_323 * _302) + uintBitsToFloat(1056964608u);
        float _333 = RVar[2u].y;
        float _335 = RVar[126u].x;
        float _338 = (_333 * _335) + uintBitsToFloat(1056964608u);
        float _340 = RVar[2u].z;
        float _342 = RVar[126u].x;
        float _345 = (_340 * _342) + uintBitsToFloat(1056964608u);
        RVar[3u].y = _338;
        RVar[3u].z = _345;
        float _351 = RVar[3u].w;
        RVar[2u].x = RVar[3u].x;
        RVar[2u].y = _338;
        RVar[2u].z = _345;
        RVar[2u].w = _351;
        float _359 = RVar[0u].y;
        float _361 = RVar[0u].z;
        float _363 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _359;
        RVar[1u].z = _361;
        RVar[1u].w = _363;
    }
    switch (PS_PUSH.alphaFunc & 255u)
    {
        case 0u:
        {
            discard;
        }
        case 1u:
        {
            if (!(RVar[1u].w < PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 2u:
        {
            if (abs(RVar[1u].w - PS_PUSH.alphaRef) > 9.9999997473787516355514526367188e-05)
            {
                discard;
            }
            break;
        }
        case 3u:
        {
            if (!(RVar[1u].w <= PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 4u:
        {
            if (!(RVar[1u].w > PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 5u:
        {
            if (abs(RVar[1u].w - PS_PUSH.alphaRef) <= 9.9999997473787516355514526367188e-05)
            {
                discard;
            }
            break;
        }
        case 6u:
        {
            if (!(RVar[1u].w >= PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
    }
    _pixelTmp = RVar[1u];
    uint _439 = PS_PUSH.alphaFunc >> 8u;
    if (_439 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_439 == 2u)
        {
            _pixelTmp = vec4(0.0);
        }
    }
    if ((PS_PUSH.needsPremultiply & 1u) != 0u)
    {
        _pixelTmp *= vec4(_pixelTmp.www, 1.0);
    }
    if (PS_PUSH.uIsSelected != 0) PIXEL_0 = vec4(_pixelTmp.rgb * 0.5f + vec3(1.0f, 0.25f, 0.25f) * 0.5f, _pixelTmp.a); else PIXEL_0 = _pixelTmp; ItemID = PS_PUSH.uItemID;
    _pixelTmp_1 = RVar[2u];
    uint _467 = PS_PUSH.alphaFunc >> 8u;
    if (_467 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_467 == 2u)
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