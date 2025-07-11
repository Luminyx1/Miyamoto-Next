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
        float _106 = RVar[0u].y;
        float _108 = RVar[4u].y;
        float _111 = (_106 * _108) + uintBitsToFloat(0u);
        float _113 = RVar[0u].x;
        float _115 = RVar[4u].x;
        float _118 = (_113 * _115) + uintBitsToFloat(0u);
        float _120 = RVar[0u].w;
        float _126 = RVar[0u].z;
        float _128 = RVar[4u].z;
        float _131 = (_126 * _128) + uintBitsToFloat(0u);
        float _133 = RVar[0u].x;
        float _135 = RVar[5u].x;
        RVar[123u].x = _111;
        RVar[123u].y = _118;
        RVar[123u].w = _131;
        RVar[127u].w = (_133 * _135) + uintBitsToFloat(0u);
        float _155 = RVar[3u].w;
        float _158 = (clamp(_120 + uintBitsToFloat(0u), 0.0, 1.0) * _155) + uintBitsToFloat(0u);
        float _160 = RVar[0u].y;
        float _162 = RVar[5u].y;
        RVar[123u].w = _158;
        RVar[127u].z = (_160 * _162) + uintBitsToFloat(0u);
        float _169 = RVar[3u].z;
        float _172 = (clamp(_131 + uintBitsToFloat(0u), 0.0, 1.0) * _169) + uintBitsToFloat(0u);
        float _174 = RVar[3u].y;
        float _177 = (clamp(_111 + uintBitsToFloat(0u), 0.0, 1.0) * _174) + uintBitsToFloat(0u);
        float _179 = RVar[3u].x;
        float _182 = (clamp(_118 + uintBitsToFloat(0u), 0.0, 1.0) * _179) + uintBitsToFloat(0u);
        float _184 = RVar[0u].z;
        float _186 = RVar[5u].z;
        RVar[123u].x = _172;
        RVar[123u].y = _177;
        RVar[123u].z = _182;
        RVar[126u].w = (_184 * _186) + uintBitsToFloat(0u);
        float _208 = (clamp(_158 + uintBitsToFloat(0u), 0.0, 1.0) * CBUFFER_1.values[10].w) + uintBitsToFloat(0u);
        RVar[123u].x = _208;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _223 = RVar[127u].w;
        float _225 = clamp(clamp(_182 + uintBitsToFloat(0u), 0.0, 1.0) + _223, 0.0, 1.0);
        float _227 = RVar[2u].z;
        float _229 = RVar[2u].z;
        float _232 = RVar[126u].w;
        float _236 = RVar[127u].z;
        RVar[127u].x = _225;
        RVar[127u].z = clamp(clamp(_172 + uintBitsToFloat(0u), 0.0, 1.0) + _232, 0.0, 1.0);
        RVar[127u].w = clamp(clamp(_177 + uintBitsToFloat(0u), 0.0, 1.0) + _236, 0.0, 1.0);
        RVar[3u].w = clamp(_208 + uintBitsToFloat(0u), 0.0, 1.0);
        float _247 = RVar[2u].x;
        float _249 = RVar[2u].y;
        float _254 = RVar[2u].x;
        float _256 = RVar[2u].y;
        float _272 = RVar[1u].z;
        float _274 = RVar[127u].z;
        float _278 = RVar[1u].y;
        float _280 = RVar[127u].w;
        float _285 = inversesqrt(dot(vec4(_247, _249, _227 * _229, uintBitsToFloat(2147483648u)), vec4(_254, _256, uintBitsToFloat(1065353216u), uintBitsToFloat(0u)))) * 0.5;
        RVar[3u].x = ((RVar[1u].x + (-_225)) * RVar[1u].w) + RVar[127u].x;
        RVar[127u].x = _285;
        float _295 = RVar[1u].w;
        float _297 = RVar[127u].w;
        float _301 = RVar[1u].w;
        float _303 = RVar[127u].z;
        float _307 = RVar[2u].y;
        RVar[0u].x = (RVar[2u].x * _285) + uintBitsToFloat(1056964608u);
        RVar[3u].y = ((_278 + (-_280)) * _295) + _297;
        RVar[3u].z = ((_272 + (-_274)) * _301) + _303;
        RVar[0u].y = (_307 * _285) + uintBitsToFloat(1056964608u);
        float _316 = RVar[2u].z;
        float _318 = RVar[127u].x;
        float _321 = (_316 * _318) + uintBitsToFloat(1056964608u);
        RVar[0u].z = _321;
        float _326 = RVar[0u].y;
        float _328 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _326;
        RVar[1u].z = _321;
        RVar[1u].w = _328;
        float _336 = RVar[3u].y;
        float _338 = RVar[3u].z;
        float _340 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _336;
        RVar[0u].z = _338;
        RVar[0u].w = _340;
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
    uint _416 = PS_PUSH.alphaFunc >> 8u;
    if (_416 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_416 == 2u)
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
    uint _444 = PS_PUSH.alphaFunc >> 8u;
    if (_444 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_444 == 2u)
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