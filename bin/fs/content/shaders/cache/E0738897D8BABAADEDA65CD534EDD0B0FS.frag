#version 430

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
        float _133 = RVar[0u].x;
        float _135 = RVar[5u].x;
        RVar[123u].x = _111;
        RVar[127u].y = clamp(_113 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[123u].z = _124;
        RVar[123u].w = _131;
        RVar[127u].z = (_133 * _135) + uintBitsToFloat(0u);
        float _163 = RVar[0u].z;
        float _165 = RVar[5u].z;
        RVar[126u].z = (RVar[0u].y * RVar[5u].y) + uintBitsToFloat(0u);
        RVar[127u].x = (_163 * _165) + uintBitsToFloat(0u);
        float _173 = RVar[3u].y;
        float _176 = (clamp(_131 + uintBitsToFloat(0u), 0.0, 1.0) * _173) + uintBitsToFloat(0u);
        float _178 = RVar[3u].x;
        float _181 = (clamp(_111 + uintBitsToFloat(0u), 0.0, 1.0) * _178) + uintBitsToFloat(0u);
        float _183 = RVar[127u].y;
        float _185 = RVar[3u].w;
        float _188 = (_183 * _185) + uintBitsToFloat(0u);
        float _190 = RVar[3u].z;
        float _193 = (clamp(_124 + uintBitsToFloat(0u), 0.0, 1.0) * _190) + uintBitsToFloat(0u);
        RVar[123u].x = _176;
        RVar[123u].y = _181;
        RVar[123u].z = _188;
        RVar[123u].w = _193;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _211 = RVar[127u].y;
        float _215 = RVar[2u].z;
        float _217 = RVar[2u].z;
        float _220 = RVar[2u].y;
        float _222 = RVar[2u].y;
        float _224 = (_220 * _222) + (_215 * _217);
        float _226 = RVar[127u].x;
        float _228 = clamp(clamp(_193 + uintBitsToFloat(0u), 0.0, 1.0) + _226, 0.0, 1.0);
        float _230 = RVar[126u].z;
        float _232 = clamp(clamp(_176 + uintBitsToFloat(0u), 0.0, 1.0) + _230, 0.0, 1.0);
        float _234 = RVar[127u].z;
        float _236 = clamp(clamp(_181 + uintBitsToFloat(0u), 0.0, 1.0) + _234, 0.0, 1.0);
        RVar[123u].x = _224;
        RVar[127u].y = _228;
        RVar[127u].z = _232;
        RVar[127u].w = _236;
        RVar[0u].w = clamp(clamp(_211 + _188, 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0);
        float _246 = RVar[1u].x;
        float _250 = RVar[2u].x;
        float _252 = RVar[2u].x;
        float _254 = (_250 * _252) + _224;
        float _256 = RVar[1u].z;
        float _260 = RVar[1u].y;
        RVar[123u].y = _254;
        float _271 = RVar[1u].w;
        float _273 = RVar[127u].z;
        float _277 = RVar[1u].w;
        float _279 = RVar[127u].y;
        float _284 = inversesqrt(_254) * 0.5;
        RVar[0u].x = ((_246 + (-_236)) * RVar[1u].w) + RVar[127u].w;
        RVar[0u].y = ((_260 + (-_232)) * _271) + _273;
        RVar[0u].z = ((_256 + (-_228)) * _277) + _279;
        float _289 = RVar[2u].x;
        float _293 = (_289 * _284) + uintBitsToFloat(1056964608u);
        float _295 = RVar[2u].y;
        float _298 = (_295 * _284) + uintBitsToFloat(1056964608u);
        float _300 = RVar[2u].z;
        float _303 = (_300 * _284) + uintBitsToFloat(1056964608u);
        RVar[3u].x = _293;
        RVar[3u].y = _298;
        RVar[3u].z = _303;
        float _308 = RVar[3u].w;
        RVar[2u].x = _293;
        RVar[2u].y = _298;
        RVar[2u].z = _303;
        RVar[2u].w = _308;
        float _316 = RVar[0u].y;
        float _318 = RVar[0u].z;
        float _320 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _316;
        RVar[1u].z = _318;
        RVar[1u].w = _320;
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
    uint _396 = PS_PUSH.alphaFunc >> 8u;
    if (_396 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_396 == 2u)
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
    uint _424 = PS_PUSH.alphaFunc >> 8u;
    if (_424 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_424 == 2u)
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