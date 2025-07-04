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
    RVar[0u] = PARAM_1;
    RVar[1u] = PARAM_0;
    RVar[2u] = PARAM_3;
    RVar[3u] = PARAM_4;
    RVar[4u] = PARAM_5;
    if (stateVar == 0)
    {
        RVar[3u] = texture(tex_map1, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[2u] = texture(tex_map0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
        RVar[4u] = texture(tex_map2, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
    }
    if (stateVar == 0)
    {
        float _98 = RVar[3u].z;
        float _104 = RVar[3u].y;
        float _109 = RVar[3u].x;
        float _127 = RVar[2u].x;
        RVar[127u].w = (RVar[3u].w * CBUFFER_1.values[10].w) + uintBitsToFloat(0u);
        RVar[126u].w = (-_127) + uintBitsToFloat(1065353216u);
        float _145 = (CBUFFER_1.values[5].z * ((-_98) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _150 = (CBUFFER_1.values[5].y * ((-_104) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _155 = (CBUFFER_1.values[5].x * ((-_109) + uintBitsToFloat(1065353216u))) + uintBitsToFloat(0u);
        float _157 = RVar[2u].z;
        RVar[127u].x = (-RVar[2u].y) + uintBitsToFloat(1065353216u);
        RVar[123u].y = _145;
        RVar[123u].z = _150;
        RVar[123u].w = _155;
        RVar[127u].y = (-_157) + uintBitsToFloat(1065353216u);
        float _171 = RVar[3u].x;
        float _175 = clamp((CBUFFER_1.values[4].x * _171) + _155, 0.0, 1.0);
        float _177 = RVar[127u].w;
        float _180 = clamp(_177 + uintBitsToFloat(0u), 0.0, 1.0);
        float _184 = RVar[3u].z;
        float _187 = clamp((CBUFFER_1.values[4].z * _184) + _145, 0.0, 1.0);
        float _191 = RVar[3u].y;
        float _194 = clamp((CBUFFER_1.values[4].y * _191) + _150, 0.0, 1.0);
        float _198 = RVar[4u].x;
        RVar[123u].x = _175;
        RVar[123u].z = _187;
        RVar[123u].w = _194;
        RVar[126u].x = (CBUFFER_1.values[4].x * _198) + uintBitsToFloat(0u);
        float _209 = RVar[126u].w;
        float _211 = (CBUFFER_1.values[5].x * _209) + _175;
        float _213 = RVar[2u].w;
        float _220 = RVar[127u].y;
        float _222 = (CBUFFER_1.values[5].z * _220) + _187;
        float _226 = RVar[127u].x;
        float _228 = (CBUFFER_1.values[5].y * _226) + _194;
        float _230 = RVar[4u].w;
        RVar[123u].x = _211;
        RVar[127u].y = (_180 * _213) + uintBitsToFloat(0u);
        RVar[123u].z = _222;
        RVar[123u].w = _228;
        RVar[127u].z = (_180 * _230) + uintBitsToFloat(0u);
        float _242 = RVar[2u].y;
        float _247 = clamp(((CBUFFER_1.values[4].y * _242) + _228) * 2.0, 0.0, 1.0);
        float _251 = RVar[2u].x;
        float _255 = clamp(((CBUFFER_1.values[4].x * _251) + _211) * 2.0, 0.0, 1.0);
        float _259 = RVar[4u].y;
        float _262 = (CBUFFER_1.values[4].y * _259) + uintBitsToFloat(0u);
        float _266 = RVar[2u].z;
        float _270 = clamp(((CBUFFER_1.values[4].z * _266) + _222) * 2.0, 0.0, 1.0);
        float _274 = RVar[4u].z;
        float _277 = (CBUFFER_1.values[4].z * _274) + uintBitsToFloat(0u);
        RVar[123u].x = _247;
        RVar[123u].y = _255;
        RVar[123u].z = _262;
        RVar[123u].w = _270;
        RVar[122u].x = _277;
        float _289 = RVar[2u].w;
        float _291 = RVar[127u].y;
        RVar[126u].x = clamp(_255 + RVar[126u].x, 0.0, 1.0);
        RVar[126u].z = clamp(_247 + _262, 0.0, 1.0);
        RVar[126u].w = clamp(_270 + _277, 0.0, 1.0);
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _323 = RVar[127u].z;
        RVar[127u].y = dot(vec4(RVar[1u].x, RVar[1u].y, RVar[1u].z, uintBitsToFloat(2147483648u)), vec4(RVar[1u].x, RVar[1u].y, RVar[1u].z, uintBitsToFloat(0u)));
        float _327 = RVar[0u].x;
        float _329 = RVar[126u].x;
        float _333 = RVar[0u].z;
        float _335 = RVar[126u].w;
        float _339 = RVar[0u].y;
        float _341 = RVar[126u].z;
        RVar[4u].w = clamp(((clamp((_289 + _291) * 2.0, 0.0, 1.0) + _323) + (-uintBitsToFloat(1056964608u))) * 2.0, 0.0, 1.0);
        float _358 = RVar[0u].w;
        float _360 = RVar[126u].z;
        float _364 = RVar[0u].w;
        float _366 = RVar[126u].w;
        float _370 = RVar[127u].y;
        float _373 = inversesqrt(_370) * 0.5;
        RVar[4u].x = ((_327 + (-_329)) * RVar[0u].w) + RVar[126u].x;
        RVar[4u].y = ((_339 + (-_341)) * _358) + _360;
        RVar[4u].z = ((_333 + (-_335)) * _364) + _366;
        float _378 = RVar[1u].x;
        float _381 = (_378 * _373) + uintBitsToFloat(1056964608u);
        float _383 = RVar[1u].y;
        float _386 = (_383 * _373) + uintBitsToFloat(1056964608u);
        float _388 = RVar[1u].z;
        float _391 = (_388 * _373) + uintBitsToFloat(1056964608u);
        RVar[2u].x = _381;
        RVar[2u].y = _386;
        RVar[2u].z = _391;
        float _396 = RVar[2u].w;
        RVar[1u].x = _381;
        RVar[1u].y = _386;
        RVar[1u].z = _391;
        RVar[1u].w = _396;
        float _404 = RVar[4u].y;
        float _406 = RVar[4u].z;
        float _408 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _404;
        RVar[0u].z = _406;
        RVar[0u].w = _408;
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
    uint _484 = PS_PUSH.alphaFunc >> 8u;
    if (_484 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_484 == 2u)
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
    uint _512 = PS_PUSH.alphaFunc >> 8u;
    if (_512 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_512 == 2u)
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