#version 430

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D tex_map0;
uniform sampler2D tex_map2;
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
        RVar[3u] = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        vec4 _81 = texture(tex_map2, vec4(RVar[5u].xy, 0.0, RVar[5u].x).xy);
        RVar[5u] = vec4(_81.x, _81.y, _81.z, RVar[5u].w);
        vec4 _96 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_96.x, _96.y, _96.z, RVar[4u].w);
    }
    if (stateVar == 0)
    {
        float _106 = RVar[0u].z;
        float _108 = RVar[3u].z;
        float _111 = (_106 * _108) + uintBitsToFloat(0u);
        float _113 = RVar[0u].w;
        float _115 = RVar[3u].w;
        float _118 = (_113 * _115) + uintBitsToFloat(0u);
        float _120 = RVar[0u].y;
        float _122 = RVar[3u].y;
        float _125 = (_120 * _122) + uintBitsToFloat(0u);
        float _127 = RVar[0u].x;
        float _129 = RVar[3u].x;
        float _132 = (_127 * _129) + uintBitsToFloat(0u);
        RVar[123u].x = _111;
        RVar[123u].y = _118;
        RVar[123u].z = _125;
        RVar[123u].w = _132;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _144 = clamp(_118 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].z = clamp(_111 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _164 = RVar[5u].z;
        float _167 = (_144 * _164) + uintBitsToFloat(0u);
        float _169 = RVar[5u].y;
        float _172 = (_144 * _169) + uintBitsToFloat(0u);
        float _174 = RVar[5u].x;
        float _177 = (_144 * _174) + uintBitsToFloat(0u);
        float _179 = RVar[4u].y;
        RVar[127u].x = (clamp(_132 + uintBitsToFloat(0u), 0.0, 1.0) * RVar[4u].x) + uintBitsToFloat(0u);
        RVar[123u].y = _167;
        RVar[123u].z = _172;
        RVar[123u].w = _177;
        RVar[127u].y = (clamp(_125 + uintBitsToFloat(0u), 0.0, 1.0) * _179) + uintBitsToFloat(0u);
        float _189 = RVar[127u].z;
        float _191 = RVar[4u].z;
        float _194 = (_189 * _191) + uintBitsToFloat(0u);
        float _205 = RVar[2u].z;
        float _207 = RVar[2u].z;
        RVar[123u].x = _194;
        float _211 = RVar[2u].y;
        float _213 = RVar[2u].y;
        float _215 = (_211 * _213) + (_205 * _207);
        float _217 = clamp(clamp(_167 + uintBitsToFloat(0u), 0.0, 1.0) + _194, 0.0, 1.0);
        float _219 = RVar[127u].y;
        float _221 = clamp(clamp(_172 + uintBitsToFloat(0u), 0.0, 1.0) + _219, 0.0, 1.0);
        float _223 = RVar[127u].x;
        float _225 = clamp(clamp(_177 + uintBitsToFloat(0u), 0.0, 1.0) + _223, 0.0, 1.0);
        RVar[123u].x = _215;
        RVar[127u].y = _217;
        RVar[127u].z = _221;
        RVar[127u].w = _225;
        float _231 = RVar[1u].x;
        float _235 = RVar[2u].x;
        float _237 = RVar[2u].x;
        float _239 = (_235 * _237) + _215;
        float _241 = RVar[1u].z;
        float _245 = RVar[1u].y;
        RVar[123u].y = _239;
        float _256 = RVar[1u].w;
        float _258 = RVar[127u].z;
        float _262 = RVar[1u].w;
        float _264 = RVar[127u].y;
        float _269 = inversesqrt(_239) * 0.5;
        RVar[3u].x = ((_231 + (-_225)) * RVar[1u].w) + RVar[127u].w;
        RVar[3u].y = ((_245 + (-_221)) * _256) + _258;
        RVar[3u].z = ((_241 + (-_217)) * _262) + _264;
        float _274 = RVar[2u].x;
        float _278 = (_274 * _269) + uintBitsToFloat(1056964608u);
        float _280 = RVar[2u].y;
        float _283 = (_280 * _269) + uintBitsToFloat(1056964608u);
        float _285 = RVar[2u].z;
        float _288 = (_285 * _269) + uintBitsToFloat(1056964608u);
        RVar[0u].x = _278;
        RVar[0u].y = _283;
        RVar[0u].z = _288;
        float _293 = RVar[0u].w;
        RVar[1u].x = _278;
        RVar[1u].y = _283;
        RVar[1u].z = _288;
        RVar[1u].w = _293;
        float _301 = RVar[3u].y;
        float _303 = RVar[3u].z;
        float _305 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _301;
        RVar[0u].z = _303;
        RVar[0u].w = _305;
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
    uint _381 = PS_PUSH.alphaFunc >> 8u;
    if (_381 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_381 == 2u)
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
    uint _409 = PS_PUSH.alphaFunc >> 8u;
    if (_409 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_409 == 2u)
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