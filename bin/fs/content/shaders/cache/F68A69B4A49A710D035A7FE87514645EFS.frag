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

uniform sampler2D tex_map2;
uniform sampler2D tex_map0;
uniform sampler2D tex_map1;

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
        vec4 _68 = texture(tex_map2, vec4(RVar[5u].xy, 0.0, RVar[5u].x).xy);
        RVar[5u] = vec4(_68.x, _68.y, _68.z, RVar[5u].w);
        RVar[3u] = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        vec4 _96 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_96.x, _96.y, _96.z, RVar[4u].w);
    }
    if (stateVar == 0)
    {
        float _106 = RVar[0u].x;
        float _108 = RVar[5u].x;
        float _111 = (_106 * _108) + uintBitsToFloat(0u);
        float _113 = RVar[0u].w;
        float _119 = RVar[0u].z;
        float _121 = RVar[5u].z;
        float _124 = (_119 * _121) + uintBitsToFloat(0u);
        float _126 = RVar[0u].y;
        float _128 = RVar[5u].y;
        float _131 = (_126 * _128) + uintBitsToFloat(0u);
        RVar[123u].x = _111;
        RVar[123u].z = _124;
        RVar[123u].w = _131;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _146 = RVar[3u].w;
        float _149 = (clamp(_113 + uintBitsToFloat(0u), 0.0, 1.0) * _146) + uintBitsToFloat(0u);
        float _154 = RVar[2u].z;
        float _156 = RVar[2u].z;
        RVar[123u].z = _149;
        float _160 = RVar[3u].y;
        float _163 = (clamp(_131 + uintBitsToFloat(0u), 0.0, 1.0) * _160) + uintBitsToFloat(0u);
        float _165 = RVar[3u].x;
        float _168 = (clamp(_111 + uintBitsToFloat(0u), 0.0, 1.0) * _165) + uintBitsToFloat(0u);
        float _173 = RVar[3u].z;
        float _176 = (clamp(_124 + uintBitsToFloat(0u), 0.0, 1.0) * _173) + uintBitsToFloat(0u);
        float _178 = RVar[2u].y;
        float _180 = RVar[2u].y;
        float _182 = (_178 * _180) + (_154 * _156);
        RVar[123u].x = _163;
        RVar[123u].y = _168;
        RVar[123u].w = _176;
        RVar[122u].x = _182;
        float _198 = RVar[2u].x;
        float _200 = RVar[2u].x;
        float _202 = (_198 * _200) + _182;
        RVar[123u].w = _202;
        RVar[3u].w = clamp(clamp(_149 + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0);
        float _209 = RVar[4u].z;
        float _212 = (clamp(_176 + uintBitsToFloat(0u), 0.0, 1.0) * _209) + uintBitsToFloat(0u);
        float _214 = RVar[4u].y;
        float _217 = (clamp(_163 + uintBitsToFloat(0u), 0.0, 1.0) * _214) + uintBitsToFloat(0u);
        float _219 = RVar[4u].x;
        float _222 = (clamp(_168 + uintBitsToFloat(0u), 0.0, 1.0) * _219) + uintBitsToFloat(0u);
        float _225 = inversesqrt(_202) * 0.5;
        RVar[123u].x = _212;
        RVar[123u].y = _217;
        RVar[123u].z = _222;
        RVar[127u].x = _225;
        float _246 = clamp(CBUFFER_1.values[7].z + _212, 0.0, 1.0);
        float _250 = clamp(CBUFFER_1.values[7].y + _217, 0.0, 1.0);
        float _254 = clamp(CBUFFER_1.values[7].x + _222, 0.0, 1.0);
        float _256 = RVar[2u].y;
        RVar[0u].x = (RVar[2u].x * _225) + uintBitsToFloat(1056964608u);
        RVar[127u].y = _246;
        RVar[127u].z = _250;
        RVar[127u].w = _254;
        RVar[0u].y = (_256 * _225) + uintBitsToFloat(1056964608u);
        float _266 = RVar[1u].x;
        float _270 = RVar[1u].z;
        float _274 = RVar[1u].y;
        RVar[0u].z = (RVar[2u].z * RVar[127u].x) + uintBitsToFloat(1056964608u);
        float _292 = RVar[1u].w;
        float _294 = RVar[127u].z;
        float _298 = RVar[1u].w;
        float _300 = RVar[127u].y;
        RVar[3u].x = ((_266 + (-_254)) * RVar[1u].w) + RVar[127u].w;
        RVar[3u].y = ((_274 + (-_250)) * _292) + _294;
        RVar[3u].z = ((_270 + (-_246)) * _298) + _300;
        float _309 = RVar[0u].y;
        float _311 = RVar[0u].z;
        float _313 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _309;
        RVar[1u].z = _311;
        RVar[1u].w = _313;
        float _321 = RVar[3u].y;
        float _323 = RVar[3u].z;
        float _325 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _321;
        RVar[0u].z = _323;
        RVar[0u].w = _325;
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
    uint _401 = PS_PUSH.alphaFunc >> 8u;
    if (_401 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_401 == 2u)
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
    uint _429 = PS_PUSH.alphaFunc >> 8u;
    if (_429 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_429 == 2u)
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