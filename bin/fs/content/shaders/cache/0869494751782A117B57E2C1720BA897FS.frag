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
uniform sampler2D tex_map1;
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
        RVar[3u] = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[4u] = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[5u] = texture(tex_map2, vec4(RVar[5u].xy, 0.0, RVar[5u].x).xy);
    }
    if (stateVar == 0)
    {
        float _115 = RVar[3u].z;
        float _120 = (_115 * CBUFFER_1.values[10].w) + uintBitsToFloat(0u);
        float _122 = RVar[3u].y;
        float _127 = (_122 * CBUFFER_1.values[10].w) + uintBitsToFloat(0u);
        float _129 = RVar[3u].x;
        float _134 = (_129 * CBUFFER_1.values[10].w) + uintBitsToFloat(0u);
        float _138 = RVar[4u].y;
        RVar[127u].x = (CBUFFER_1.values[10].z * RVar[4u].x) + uintBitsToFloat(0u);
        RVar[123u].y = _120;
        RVar[123u].z = _127;
        RVar[123u].w = _134;
        RVar[127u].z = (CBUFFER_1.values[10].z * _138) + uintBitsToFloat(0u);
        float _156 = RVar[4u].z;
        float _159 = (CBUFFER_1.values[10].z * _156) + uintBitsToFloat(0u);
        float _167 = RVar[3u].w;
        RVar[123u].y = _159;
        RVar[127u].y = (_167 * CBUFFER_1.values[10].w) + uintBitsToFloat(0u);
        float _176 = RVar[127u].x;
        float _182 = RVar[5u].x;
        float _185 = (CBUFFER_1.values[10].y * _182) + uintBitsToFloat(0u);
        float _189 = RVar[127u].z;
        float _195 = RVar[5u].y;
        float _198 = (CBUFFER_1.values[10].y * _195) + uintBitsToFloat(0u);
        RVar[123u].y = _185;
        RVar[127u].z = clamp(clamp(_120 + uintBitsToFloat(0u), 0.0, 1.0) + _159, 0.0, 1.0);
        RVar[122u].x = _198;
        float _208 = RVar[5u].z;
        float _211 = (CBUFFER_1.values[10].y * _208) + uintBitsToFloat(0u);
        float _213 = RVar[127u].y;
        float _222 = RVar[4u].w;
        float _225 = (CBUFFER_1.values[10].z * _222) + uintBitsToFloat(0u);
        RVar[123u].y = _211;
        RVar[122u].x = _225;
        float _231 = RVar[0u].y;
        float _234 = (_231 * clamp(clamp(clamp(_127 + uintBitsToFloat(0u), 0.0, 1.0) + _189, 0.0, 1.0) + _198, 0.0, 1.0)) + uintBitsToFloat(0u);
        float _236 = RVar[127u].z;
        float _240 = RVar[0u].x;
        float _243 = (_240 * clamp(clamp(clamp(_134 + uintBitsToFloat(0u), 0.0, 1.0) + _176, 0.0, 1.0) + _185, 0.0, 1.0)) + uintBitsToFloat(0u);
        float _247 = RVar[5u].w;
        float _250 = (CBUFFER_1.values[10].y * _247) + uintBitsToFloat(0u);
        RVar[123u].y = _234;
        RVar[123u].w = _243;
        RVar[122u].x = _250;
        float _257 = RVar[0u].z;
        float _260 = (_257 * clamp(_236 + _211, 0.0, 1.0)) + uintBitsToFloat(0u);
        float _263 = clamp(_243 + uintBitsToFloat(0u), 0.0, 1.0);
        float _266 = clamp(_234 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[123u].y = _260;
        RVar[127u].z = _263;
        RVar[126u].w = _266;
        RVar[5u].w = uintBitsToFloat(1065353216u);
        float _279 = RVar[0u].w;
        float _285 = clamp(_260 + uintBitsToFloat(0u), 0.0, 1.0);
        float _287 = RVar[1u].y;
        float _291 = RVar[2u].z;
        float _293 = RVar[2u].z;
        RVar[127u].x = RVar[1u].x + (-_263);
        RVar[127u].y = (_279 * clamp(clamp(clamp(_213 + uintBitsToFloat(0u), 0.0, 1.0) + _225, 0.0, 1.0) + _250, 0.0, 1.0)) + uintBitsToFloat(0u);
        RVar[126u].z = _285;
        RVar[127u].w = _287 + (-_266);
        float _300 = RVar[2u].x;
        float _302 = RVar[2u].y;
        float _307 = RVar[2u].x;
        float _309 = RVar[2u].y;
        float _315 = RVar[1u].z;
        float _327 = RVar[127u].w;
        float _329 = RVar[1u].w;
        float _331 = RVar[126u].w;
        float _335 = RVar[1u].w;
        float _337 = RVar[126u].z;
        float _341 = RVar[127u].y;
        float _347 = inversesqrt(dot(vec4(_300, _302, _291 * _293, uintBitsToFloat(2147483648u)), vec4(_307, _309, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[1u].x = (RVar[127u].x * RVar[1u].w) + RVar[127u].z;
        RVar[1u].y = (_327 * _329) + _331;
        RVar[1u].z = ((_315 + (-_285)) * _335) + _337;
        RVar[1u].w = clamp(_341 + uintBitsToFloat(0u), 0.0, 1.0);
        float _353 = RVar[2u].x;
        float _357 = (_353 * _347) + uintBitsToFloat(1056964608u);
        float _359 = RVar[2u].y;
        float _362 = (_359 * _347) + uintBitsToFloat(1056964608u);
        float _364 = RVar[2u].z;
        float _367 = (_364 * _347) + uintBitsToFloat(1056964608u);
        RVar[5u].x = _357;
        RVar[5u].y = _362;
        RVar[5u].z = _367;
        float _372 = RVar[5u].w;
        RVar[3u].x = _357;
        RVar[3u].y = _362;
        RVar[3u].z = _367;
        RVar[3u].w = _372;
        float _380 = RVar[1u].y;
        float _382 = RVar[1u].z;
        float _384 = RVar[1u].w;
        RVar[2u].x = RVar[1u].x;
        RVar[2u].y = _380;
        RVar[2u].z = _382;
        RVar[2u].w = _384;
    }
    switch (PS_PUSH.alphaFunc & 255u)
    {
        case 0u:
        {
            discard;
        }
        case 1u:
        {
            if (!(RVar[2u].w < PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 2u:
        {
            if (abs(RVar[2u].w - PS_PUSH.alphaRef) > 9.9999997473787516355514526367188e-05)
            {
                discard;
            }
            break;
        }
        case 3u:
        {
            if (!(RVar[2u].w <= PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 4u:
        {
            if (!(RVar[2u].w > PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
        case 5u:
        {
            if (abs(RVar[2u].w - PS_PUSH.alphaRef) <= 9.9999997473787516355514526367188e-05)
            {
                discard;
            }
            break;
        }
        case 6u:
        {
            if (!(RVar[2u].w >= PS_PUSH.alphaRef))
            {
                discard;
            }
            break;
        }
    }
    _pixelTmp = RVar[2u];
    uint _460 = PS_PUSH.alphaFunc >> 8u;
    if (_460 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_460 == 2u)
        {
            _pixelTmp = vec4(0.0);
        }
    }
    if ((PS_PUSH.needsPremultiply & 1u) != 0u)
    {
        _pixelTmp *= vec4(_pixelTmp.www, 1.0);
    }
    if (PS_PUSH.uIsSelected != 0) PIXEL_0 = vec4(_pixelTmp.rgb * 0.5f + vec3(1.0f, 0.25f, 0.25f) * 0.5f, _pixelTmp.a); else PIXEL_0 = _pixelTmp; ItemID = PS_PUSH.uItemID;
    _pixelTmp_1 = RVar[3u];
    uint _488 = PS_PUSH.alphaFunc >> 8u;
    if (_488 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_488 == 2u)
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