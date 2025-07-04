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
        float _106 = RVar[4u].x;
        float _111 = (_106 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _113 = RVar[0u].w;
        float _119 = RVar[4u].z;
        float _123 = (_119 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _125 = RVar[4u].y;
        float _129 = (_125 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _131 = RVar[5u].x;
        RVar[123u].x = _111;
        RVar[127u].y = clamp(_113 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[123u].z = _123;
        RVar[123u].w = _129;
        RVar[127u].z = (-_131) + uintBitsToFloat(1065353216u);
        float _157 = RVar[5u].z;
        RVar[126u].z = (-RVar[5u].y) + uintBitsToFloat(1065353216u);
        RVar[127u].x = (-_157) + uintBitsToFloat(1065353216u);
        float _165 = RVar[3u].y;
        float _168 = (clamp(_129 + uintBitsToFloat(0u), 0.0, 1.0) * _165) + uintBitsToFloat(0u);
        float _170 = RVar[3u].x;
        float _173 = (clamp(_111 + uintBitsToFloat(0u), 0.0, 1.0) * _170) + uintBitsToFloat(0u);
        float _175 = RVar[127u].y;
        float _177 = RVar[3u].w;
        float _180 = (_175 * _177) + uintBitsToFloat(0u);
        float _182 = RVar[3u].z;
        float _185 = (clamp(_123 + uintBitsToFloat(0u), 0.0, 1.0) * _182) + uintBitsToFloat(0u);
        RVar[123u].x = _168;
        RVar[123u].y = _173;
        RVar[123u].z = _180;
        RVar[123u].w = _185;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _205 = RVar[2u].z;
        float _207 = RVar[2u].z;
        float _210 = RVar[2u].y;
        float _212 = RVar[2u].y;
        float _214 = (_210 * _212) + (_205 * _207);
        float _216 = RVar[127u].x;
        float _226 = (clamp(_185 + uintBitsToFloat(0u), 0.0, 1.0) * _216) + CBUFFER_1.values[10].z;
        float _228 = RVar[126u].z;
        float _232 = (clamp(_168 + uintBitsToFloat(0u), 0.0, 1.0) * _228) + CBUFFER_1.values[10].y;
        float _234 = RVar[127u].z;
        float _238 = (clamp(_173 + uintBitsToFloat(0u), 0.0, 1.0) * _234) + CBUFFER_1.values[10].x;
        float _243 = (clamp(_180 + uintBitsToFloat(0u), 0.0, 1.0) * CBUFFER_1.values[10].w) + uintBitsToFloat(0u);
        RVar[123u].x = _214;
        RVar[123u].y = _226;
        RVar[123u].z = _232;
        RVar[123u].w = _238;
        RVar[122u].x = _243;
        float _251 = RVar[0u].x;
        float _253 = RVar[5u].x;
        float _256 = clamp((_251 * _253) + _238, 0.0, 1.0);
        float _258 = RVar[2u].x;
        float _260 = RVar[2u].x;
        float _262 = (_258 * _260) + _214;
        float _264 = RVar[0u].z;
        float _266 = RVar[5u].z;
        float _269 = clamp((_264 * _266) + _226, 0.0, 1.0);
        float _271 = RVar[0u].y;
        float _273 = RVar[5u].y;
        float _276 = clamp((_271 * _273) + _232, 0.0, 1.0);
        RVar[127u].x = _256;
        RVar[123u].y = _262;
        RVar[127u].z = _269;
        RVar[127u].w = _276;
        RVar[0u].w = clamp(_243 + uintBitsToFloat(0u), 0.0, 1.0);
        float _286 = RVar[1u].x;
        float _290 = RVar[1u].z;
        float _294 = RVar[1u].y;
        float _299 = inversesqrt(_262) * 0.5;
        RVar[126u].x = _299;
        float _308 = RVar[1u].w;
        float _310 = RVar[127u].w;
        float _314 = RVar[1u].w;
        float _316 = RVar[127u].z;
        float _320 = RVar[2u].x;
        RVar[0u].x = ((_286 + (-_256)) * RVar[1u].w) + RVar[127u].x;
        RVar[0u].y = ((_294 + (-_276)) * _308) + _310;
        RVar[0u].z = ((_290 + (-_269)) * _314) + _316;
        RVar[3u].x = (_320 * _299) + uintBitsToFloat(1056964608u);
        float _330 = RVar[2u].y;
        float _332 = RVar[126u].x;
        float _335 = (_330 * _332) + uintBitsToFloat(1056964608u);
        float _337 = RVar[2u].z;
        float _339 = RVar[126u].x;
        float _342 = (_337 * _339) + uintBitsToFloat(1056964608u);
        RVar[3u].y = _335;
        RVar[3u].z = _342;
        float _348 = RVar[3u].w;
        RVar[2u].x = RVar[3u].x;
        RVar[2u].y = _335;
        RVar[2u].z = _342;
        RVar[2u].w = _348;
        float _356 = RVar[0u].y;
        float _358 = RVar[0u].z;
        float _360 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _356;
        RVar[1u].z = _358;
        RVar[1u].w = _360;
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
    uint _436 = PS_PUSH.alphaFunc >> 8u;
    if (_436 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_436 == 2u)
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
    uint _464 = PS_PUSH.alphaFunc >> 8u;
    if (_464 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_464 == 2u)
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