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
        vec4 _87 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_87.x, _87.y, _87.z, RVar[3u].w);
        vec4 _102 = texture(tex_map2, vec4(RVar[5u].xy, 0.0, RVar[5u].x).xy);
        RVar[5u] = vec4(_102.x, _102.y, _102.z, RVar[5u].w);
        RVar[6u] = texture(tex_map3, vec4(RVar[6u].xy, 0.0, RVar[6u].x).xy);
    }
    if (stateVar == 0)
    {
        float _125 = RVar[0u].x;
        float _127 = RVar[4u].x;
        float _130 = (_125 * _127) + uintBitsToFloat(0u);
        float _132 = RVar[0u].x;
        float _134 = RVar[5u].x;
        float _139 = RVar[0u].z;
        float _141 = RVar[4u].z;
        float _144 = (_139 * _141) + uintBitsToFloat(0u);
        float _146 = RVar[0u].y;
        float _148 = RVar[4u].y;
        float _151 = (_146 * _148) + uintBitsToFloat(0u);
        float _153 = RVar[0u].y;
        float _155 = RVar[5u].y;
        RVar[123u].x = _130;
        RVar[127u].y = (_132 * _134) + uintBitsToFloat(0u);
        RVar[123u].z = _144;
        RVar[123u].w = _151;
        RVar[127u].x = (_153 * _155) + uintBitsToFloat(0u);
        float _192 = RVar[6u].x;
        RVar[127u].z = (RVar[0u].z * RVar[5u].z) + uintBitsToFloat(0u);
        RVar[127u].w = (CBUFFER_1.values[5].x * _192) + uintBitsToFloat(0u);
        float _199 = RVar[3u].z;
        float _202 = (clamp(_144 + uintBitsToFloat(0u), 0.0, 1.0) * _199) + uintBitsToFloat(0u);
        float _204 = RVar[3u].y;
        float _207 = (clamp(_151 + uintBitsToFloat(0u), 0.0, 1.0) * _204) + uintBitsToFloat(0u);
        float _209 = RVar[3u].x;
        float _212 = (clamp(_130 + uintBitsToFloat(0u), 0.0, 1.0) * _209) + uintBitsToFloat(0u);
        float _216 = RVar[6u].y;
        float _223 = RVar[6u].z;
        RVar[123u].x = _202;
        RVar[123u].y = _207;
        RVar[123u].z = _212;
        RVar[126u].w = (CBUFFER_1.values[5].y * _216) + uintBitsToFloat(0u);
        RVar[126u].y = (CBUFFER_1.values[5].z * _223) + uintBitsToFloat(0u);
        float _239 = RVar[6u].w;
        float _242 = (CBUFFER_1.values[5].w * _239) + uintBitsToFloat(0u);
        RVar[123u].y = _242;
        RVar[6u].w = uintBitsToFloat(1065353216u);
        float _254 = RVar[127u].z;
        float _258 = RVar[127u].x;
        float _262 = RVar[127u].y;
        float _269 = RVar[2u].z;
        float _271 = RVar[2u].z;
        RVar[3u].w = clamp(_242 + uintBitsToFloat(0u), 0.0, 1.0);
        float _275 = RVar[127u].w;
        float _277 = clamp(clamp(clamp(_212 + uintBitsToFloat(0u), 0.0, 1.0) + _262, 0.0, 1.0) + _275, 0.0, 1.0);
        float _279 = RVar[126u].y;
        float _281 = clamp(clamp(clamp(_202 + uintBitsToFloat(0u), 0.0, 1.0) + _254, 0.0, 1.0) + _279, 0.0, 1.0);
        float _283 = RVar[126u].w;
        float _285 = clamp(clamp(clamp(_207 + uintBitsToFloat(0u), 0.0, 1.0) + _258, 0.0, 1.0) + _283, 0.0, 1.0);
        float _287 = RVar[2u].y;
        float _289 = RVar[2u].y;
        float _291 = (_287 * _289) + (_269 * _271);
        RVar[127u].x = _277;
        RVar[127u].z = _281;
        RVar[127u].w = _285;
        RVar[122u].x = _291;
        float _298 = RVar[1u].x;
        float _302 = RVar[2u].x;
        float _304 = RVar[2u].x;
        float _306 = (_302 * _304) + _291;
        float _308 = RVar[1u].z;
        float _312 = RVar[1u].y;
        RVar[123u].y = _306;
        float _323 = RVar[1u].w;
        float _325 = RVar[127u].w;
        float _329 = RVar[1u].w;
        float _331 = RVar[127u].z;
        float _336 = inversesqrt(_306) * 0.5;
        RVar[3u].x = ((_298 + (-_277)) * RVar[1u].w) + RVar[127u].x;
        RVar[3u].y = ((_312 + (-_285)) * _323) + _325;
        RVar[3u].z = ((_308 + (-_281)) * _329) + _331;
        float _341 = RVar[2u].x;
        float _345 = (_341 * _336) + uintBitsToFloat(1056964608u);
        float _347 = RVar[2u].y;
        float _350 = (_347 * _336) + uintBitsToFloat(1056964608u);
        float _352 = RVar[2u].z;
        float _355 = (_352 * _336) + uintBitsToFloat(1056964608u);
        RVar[6u].x = _345;
        RVar[6u].y = _350;
        RVar[6u].z = _355;
        float _360 = RVar[6u].w;
        RVar[1u].x = _345;
        RVar[1u].y = _350;
        RVar[1u].z = _355;
        RVar[1u].w = _360;
        float _368 = RVar[3u].y;
        float _370 = RVar[3u].z;
        float _372 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _368;
        RVar[0u].z = _370;
        RVar[0u].w = _372;
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
    uint _448 = PS_PUSH.alphaFunc >> 8u;
    if (_448 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_448 == 2u)
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
    uint _476 = PS_PUSH.alphaFunc >> 8u;
    if (_476 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_476 == 2u)
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