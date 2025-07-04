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

layout(location = 2) in vec4 PARAM_2;
layout(location = 0) in vec4 PARAM_0;
layout(location = 1) in vec4 PARAM_1;
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
    RVar[0u] = PARAM_2;
    RVar[1u] = PARAM_0;
    RVar[2u] = PARAM_1;
    RVar[3u] = PARAM_3;
    RVar[4u] = PARAM_4;
    if (stateVar == 0)
    {
        vec4 _64 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_64.x, RVar[4u].y, RVar[4u].z, _64.w);
    }
    if (stateVar == 0)
    {
        float _74 = RVar[4u].w;
        float _78 = _74 + (-uintBitsToFloat(1056964608u));
        float _88 = RVar[2u].z;
        float _90 = RVar[2u].z;
        RVar[4u].y = RVar[4u].x + (-uintBitsToFloat(1056964608u));
        RVar[3u].z = uintBitsToFloat(0u);
        RVar[6u].w = uintBitsToFloat(1065353216u);
        RVar[4u].x = (RVar[2u].y * RVar[2u].y) + (_88 * _90);
        RVar[4u].z = _78 * CBUFFER_1.values[11].y;
        RVar[4u].w = _78 * CBUFFER_1.values[11].x;
    }
    if (stateVar == 0)
    {
        vec4 _138 = intBitsToFloat(ivec4(ivec3(textureSize(tex_map0, floatBitsToInt(vec4(RVar[3u].zz, 0.0, RVar[3u].z).x)), 1), textureQueryLevels(tex_map0)));
        RVar[5u] = vec4(_138.x, _138.y, RVar[5u].z, RVar[5u].w);
    }
    if (stateVar == 0)
    {
        float _148 = RVar[4u].y;
        float _152 = RVar[4u].z;
        float _154 = (_148 * CBUFFER_1.values[11].w) + _152;
        float _156 = RVar[4u].y;
        float _160 = RVar[4u].w;
        float _162 = (_156 * CBUFFER_1.values[11].z) + _160;
        float _164 = RVar[2u].x;
        float _166 = RVar[2u].x;
        float _168 = RVar[4u].x;
        float _172 = RVar[5u].x;
        RVar[123u].x = _154;
        RVar[123u].y = _162;
        RVar[126u].z = (_164 * _166) + _168;
        RVar[127u].w = float(floatBitsToInt(_172));
        float _183 = RVar[4u].y;
        float _188 = (_183 * CBUFFER_1.values[12].y) + _154;
        float _190 = RVar[4u].y;
        float _194 = (_190 * CBUFFER_1.values[12].x) + _162;
        float _196 = RVar[5u].y;
        RVar[123u].z = _188;
        RVar[123u].w = _194;
        RVar[127u].z = float(floatBitsToInt(_196));
        float _208 = RVar[127u].w;
        RVar[127u].x = _188 * uintBitsToFloat(1132396544u);
        float _213 = RVar[127u].z;
        float _219 = RVar[127u].x;
        float _222 = RVar[126u].z;
        float _226 = inversesqrt(_222) * 0.5;
        RVar[4u].x = RVar[3u].x + ((_194 * uintBitsToFloat(1132396544u)) * (1.0 / _208));
        float _234 = RVar[3u].y;
        float _237 = RVar[2u].z;
        float _242 = RVar[2u].y;
        RVar[6u].x = (RVar[2u].x * _226) + uintBitsToFloat(1056964608u);
        RVar[4u].y = _234 + (_219 * (1.0 / _213));
        RVar[6u].z = (_237 * _226) + uintBitsToFloat(1056964608u);
        RVar[6u].y = (_242 * _226) + uintBitsToFloat(1056964608u);
    }
    if (stateVar == 0)
    {
        RVar[4u] = texture(tex_map0, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
    }
    if (stateVar == 0)
    {
        float _271 = RVar[0u].w;
        float _273 = RVar[4u].w;
        float _276 = (_271 * _273) + uintBitsToFloat(0u);
        float _278 = RVar[0u].z;
        float _280 = RVar[4u].z;
        float _283 = (_278 * _280) + uintBitsToFloat(0u);
        float _285 = RVar[0u].y;
        float _287 = RVar[4u].y;
        float _290 = (_285 * _287) + uintBitsToFloat(0u);
        float _292 = RVar[0u].x;
        float _294 = RVar[4u].x;
        float _297 = (_292 * _294) + uintBitsToFloat(0u);
        RVar[123u].x = _276;
        RVar[123u].y = _283;
        RVar[123u].z = _290;
        RVar[123u].w = _297;
        float _305 = clamp((_297 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0);
        float _309 = clamp((_283 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0);
        float _313 = clamp((_290 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0);
        RVar[127u].x = _305;
        RVar[126u].z = _309;
        RVar[127u].w = _313;
        RVar[0u].w = clamp(_276 + uintBitsToFloat(0u), 0.0, 1.0);
        float _326 = RVar[1u].z;
        float _330 = RVar[1u].y;
        float _340 = RVar[1u].w;
        float _342 = RVar[127u].w;
        float _346 = RVar[1u].w;
        float _348 = RVar[126u].z;
        RVar[0u].x = ((RVar[1u].x + (-_305)) * RVar[1u].w) + RVar[127u].x;
        RVar[0u].y = ((_330 + (-_313)) * _340) + _342;
        RVar[0u].z = ((_326 + (-_309)) * _346) + _348;
        float _357 = RVar[6u].y;
        float _359 = RVar[6u].z;
        float _361 = RVar[6u].w;
        RVar[2u].x = RVar[6u].x;
        RVar[2u].y = _357;
        RVar[2u].z = _359;
        RVar[2u].w = _361;
        float _369 = RVar[0u].y;
        float _371 = RVar[0u].z;
        float _373 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _369;
        RVar[1u].z = _371;
        RVar[1u].w = _373;
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
    uint _449 = PS_PUSH.alphaFunc >> 8u;
    if (_449 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_449 == 2u)
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
    uint _477 = PS_PUSH.alphaFunc >> 8u;
    if (_477 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_477 == 2u)
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