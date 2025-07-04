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
        vec4 _83 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_83.x, _83.y, _83.z, RVar[3u].w);
        vec4 _98 = texture(tex_map2, vec4(RVar[5u].xy, 0.0, RVar[5u].x).xy);
        RVar[5u] = vec4(_98.x, _98.y, _98.z, RVar[5u].w);
    }
    if (stateVar == 0)
    {
        float _108 = RVar[0u].y;
        float _110 = RVar[4u].y;
        float _113 = (_108 * _110) + uintBitsToFloat(0u);
        float _115 = RVar[0u].x;
        float _117 = RVar[4u].x;
        float _120 = (_115 * _117) + uintBitsToFloat(0u);
        float _122 = RVar[0u].x;
        float _124 = RVar[5u].x;
        float _129 = RVar[0u].z;
        float _131 = RVar[4u].z;
        float _134 = (_129 * _131) + uintBitsToFloat(0u);
        float _136 = RVar[0u].y;
        float _138 = RVar[5u].y;
        RVar[123u].x = _113;
        RVar[123u].y = _120;
        RVar[127u].z = (_122 * _124) + uintBitsToFloat(0u);
        RVar[123u].w = _134;
        RVar[127u].y = (_136 * _138) + uintBitsToFloat(0u);
        RVar[127u].w = (RVar[0u].z * RVar[5u].z) + uintBitsToFloat(0u);
        RVar[0u].w = clamp(CBUFFER_1.values[6].w + uintBitsToFloat(0u), 0.0, 1.0);
        float _180 = RVar[2u].z;
        float _182 = RVar[2u].z;
        float _185 = RVar[3u].z;
        float _188 = (clamp(_134 + uintBitsToFloat(0u), 0.0, 1.0) * _185) + uintBitsToFloat(0u);
        float _190 = RVar[3u].y;
        float _193 = (clamp(_113 + uintBitsToFloat(0u), 0.0, 1.0) * _190) + uintBitsToFloat(0u);
        float _195 = RVar[3u].x;
        float _198 = (clamp(_120 + uintBitsToFloat(0u), 0.0, 1.0) * _195) + uintBitsToFloat(0u);
        RVar[123u].y = _188;
        RVar[123u].z = _193;
        RVar[123u].w = _198;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _215 = RVar[2u].y;
        float _217 = RVar[2u].y;
        float _219 = (_215 * _217) + (_180 * _182);
        RVar[122u].x = _219;
        float _223 = RVar[2u].x;
        float _225 = RVar[2u].x;
        float _227 = (_223 * _225) + _219;
        float _229 = RVar[127u].w;
        float _231 = clamp(clamp(_188 + uintBitsToFloat(0u), 0.0, 1.0) + _229, 0.0, 1.0);
        float _233 = RVar[127u].y;
        float _235 = clamp(clamp(_193 + uintBitsToFloat(0u), 0.0, 1.0) + _233, 0.0, 1.0);
        float _237 = RVar[127u].z;
        float _239 = clamp(clamp(_198 + uintBitsToFloat(0u), 0.0, 1.0) + _237, 0.0, 1.0);
        RVar[123u].x = _227;
        RVar[127u].y = _231;
        RVar[127u].z = _235;
        RVar[127u].w = _239;
        float _245 = RVar[1u].x;
        float _249 = RVar[1u].z;
        float _253 = RVar[1u].y;
        float _258 = inversesqrt(_227) * 0.5;
        RVar[127u].x = _258;
        float _267 = RVar[1u].w;
        float _269 = RVar[127u].z;
        float _273 = RVar[1u].w;
        float _275 = RVar[127u].y;
        float _279 = RVar[2u].x;
        RVar[0u].x = ((_245 + (-_239)) * RVar[1u].w) + RVar[127u].w;
        RVar[0u].y = ((_253 + (-_235)) * _267) + _269;
        RVar[0u].z = ((_249 + (-_231)) * _273) + _275;
        RVar[3u].x = (_279 * _258) + uintBitsToFloat(1056964608u);
        float _289 = RVar[2u].y;
        float _291 = RVar[127u].x;
        float _294 = (_289 * _291) + uintBitsToFloat(1056964608u);
        float _296 = RVar[2u].z;
        float _298 = RVar[127u].x;
        float _301 = (_296 * _298) + uintBitsToFloat(1056964608u);
        RVar[3u].y = _294;
        RVar[3u].z = _301;
        float _307 = RVar[3u].w;
        RVar[2u].x = RVar[3u].x;
        RVar[2u].y = _294;
        RVar[2u].z = _301;
        RVar[2u].w = _307;
        float _315 = RVar[0u].y;
        float _317 = RVar[0u].z;
        float _319 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _315;
        RVar[1u].z = _317;
        RVar[1u].w = _319;
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
    uint _395 = PS_PUSH.alphaFunc >> 8u;
    if (_395 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_395 == 2u)
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
    uint _423 = PS_PUSH.alphaFunc >> 8u;
    if (_423 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_423 == 2u)
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