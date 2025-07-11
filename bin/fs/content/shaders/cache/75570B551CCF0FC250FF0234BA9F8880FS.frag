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
    RVar[0u] = PARAM_0;
    RVar[1u] = PARAM_1;
    RVar[2u] = PARAM_3;
    RVar[3u] = PARAM_4;
    if (stateVar == 0)
    {
        vec4 _60 = texture(tex_map1, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_60.x, RVar[3u].y, RVar[3u].z, _60.w);
    }
    if (stateVar == 0)
    {
        float _70 = RVar[1u].z;
        float _72 = RVar[1u].z;
        float _75 = RVar[3u].w;
        float _79 = _75 + (-uintBitsToFloat(1056964608u));
        RVar[2u].z = RVar[3u].x + (-uintBitsToFloat(1056964608u));
        RVar[3u].w = uintBitsToFloat(0u);
        RVar[6u].w = uintBitsToFloat(1065353216u);
        float _105 = RVar[1u].y;
        float _107 = RVar[1u].y;
        RVar[3u].x = _79 * CBUFFER_1.values[11].x;
        RVar[1u].w = _79 * CBUFFER_1.values[11].y;
        RVar[5u].x = (_105 * _107) + (_70 * _72);
    }
    if (stateVar == 0)
    {
        vec4 _135 = intBitsToFloat(ivec4(ivec3(textureSize(tex_map0, floatBitsToInt(vec4(RVar[3u].ww, 0.0, RVar[3u].w).x)), 1), textureQueryLevels(tex_map0)));
        RVar[4u] = vec4(_135.x, _135.y, RVar[4u].z, RVar[4u].w);
    }
    if (stateVar == 0)
    {
        float _145 = RVar[2u].z;
        float _149 = RVar[1u].w;
        float _151 = (_145 * CBUFFER_1.values[11].w) + _149;
        float _153 = RVar[2u].z;
        float _157 = RVar[3u].x;
        float _159 = (_153 * CBUFFER_1.values[11].z) + _157;
        float _161 = RVar[4u].x;
        RVar[123u].y = _151;
        RVar[123u].z = _159;
        RVar[127u].x = float(floatBitsToInt(_161));
        float _170 = RVar[2u].z;
        float _175 = (_170 * CBUFFER_1.values[12].x) + _159;
        float _177 = RVar[1u].x;
        float _179 = RVar[1u].x;
        float _181 = RVar[5u].x;
        float _185 = RVar[2u].z;
        float _189 = (_185 * CBUFFER_1.values[12].y) + _151;
        float _191 = RVar[4u].y;
        RVar[123u].x = _175;
        RVar[126u].y = (_177 * _179) + _181;
        RVar[123u].w = _189;
        RVar[127u].w = float(floatBitsToInt(_191));
        float _205 = RVar[127u].x;
        RVar[127u].y = _189 * uintBitsToFloat(1132396544u);
        float _210 = RVar[127u].w;
        float _216 = RVar[127u].y;
        float _219 = RVar[126u].y;
        float _223 = inversesqrt(_219) * 0.5;
        RVar[4u].x = RVar[2u].x + ((_175 * uintBitsToFloat(1132396544u)) * (1.0 / _205));
        float _231 = RVar[2u].y;
        float _234 = RVar[1u].z;
        float _239 = RVar[1u].y;
        RVar[6u].x = (RVar[1u].x * _223) + uintBitsToFloat(1056964608u);
        RVar[4u].y = _231 + (_216 * (1.0 / _210));
        RVar[6u].z = (_234 * _223) + uintBitsToFloat(1056964608u);
        RVar[6u].y = (_239 * _223) + uintBitsToFloat(1056964608u);
    }
    if (stateVar == 0)
    {
        RVar[4u] = texture(tex_map0, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
    }
    if (stateVar == 0)
    {
        float _268 = RVar[4u].x;
        float _271 = clamp(_268 + uintBitsToFloat(0u), 0.0, 1.0);
        float _273 = RVar[4u].w;
        float _278 = (_273 * uintBitsToFloat(1061158912u)) + uintBitsToFloat(0u);
        float _280 = RVar[4u].z;
        float _283 = clamp(_280 + uintBitsToFloat(0u), 0.0, 1.0);
        float _285 = RVar[4u].y;
        float _288 = clamp(_285 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].x = _271;
        RVar[123u].y = _278;
        RVar[127u].z = _283;
        RVar[127u].w = _288;
        float _294 = RVar[0u].x;
        float _298 = RVar[0u].z;
        float _302 = RVar[0u].y;
        RVar[4u].w = clamp((_278 + uintBitsToFloat(0u)) * 2.0, 0.0, 1.0);
        float _318 = RVar[0u].w;
        float _320 = RVar[127u].w;
        float _324 = RVar[0u].w;
        float _326 = RVar[127u].z;
        RVar[4u].x = ((_294 + (-_271)) * RVar[0u].w) + RVar[127u].x;
        RVar[4u].y = ((_302 + (-_288)) * _318) + _320;
        RVar[4u].z = ((_298 + (-_283)) * _324) + _326;
        float _335 = RVar[6u].y;
        float _337 = RVar[6u].z;
        float _339 = RVar[6u].w;
        RVar[1u].x = RVar[6u].x;
        RVar[1u].y = _335;
        RVar[1u].z = _337;
        RVar[1u].w = _339;
        float _347 = RVar[4u].y;
        float _349 = RVar[4u].z;
        float _351 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _347;
        RVar[0u].z = _349;
        RVar[0u].w = _351;
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
    uint _427 = PS_PUSH.alphaFunc >> 8u;
    if (_427 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_427 == 2u)
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
    uint _455 = PS_PUSH.alphaFunc >> 8u;
    if (_455 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_455 == 2u)
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