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
        vec4 _83 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_83.x, _83.y, _83.z, RVar[3u].w);
        vec4 _98 = texture(tex_map2, vec4(RVar[5u].xy, 0.0, RVar[5u].x).xy);
        RVar[5u] = vec4(_98.x, _98.y, _98.z, RVar[5u].w);
    }
    if (stateVar == 0)
    {
        float _115 = RVar[0u].z;
        float _117 = RVar[4u].z;
        float _120 = (_115 * _117) + uintBitsToFloat(0u);
        float _122 = RVar[0u].y;
        float _124 = RVar[4u].y;
        float _127 = (_122 * _124) + uintBitsToFloat(0u);
        float _129 = RVar[0u].x;
        float _131 = RVar[4u].x;
        float _134 = (_129 * _131) + uintBitsToFloat(0u);
        float _136 = RVar[0u].y;
        float _138 = RVar[5u].y;
        RVar[127u].x = (RVar[0u].x * RVar[5u].x) + uintBitsToFloat(0u);
        RVar[123u].y = _120;
        RVar[123u].z = _127;
        RVar[123u].w = _134;
        RVar[127u].y = (_136 * _138) + uintBitsToFloat(0u);
        float _167 = RVar[0u].w;
        RVar[126u].y = (RVar[0u].z * RVar[5u].z) + uintBitsToFloat(0u);
        float _174 = RVar[3u].x;
        float _177 = (clamp(_134 + uintBitsToFloat(0u), 0.0, 1.0) * _174) + uintBitsToFloat(0u);
        float _182 = RVar[3u].z;
        float _185 = (clamp(_120 + uintBitsToFloat(0u), 0.0, 1.0) * _182) + uintBitsToFloat(0u);
        float _187 = RVar[3u].y;
        float _190 = (clamp(_127 + uintBitsToFloat(0u), 0.0, 1.0) * _187) + uintBitsToFloat(0u);
        RVar[123u].x = _177;
        RVar[123u].z = _185;
        RVar[123u].w = _190;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _207 = RVar[2u].z;
        float _209 = RVar[2u].z;
        RVar[0u].w = clamp(clamp(clamp(_167 + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0);
        float _220 = RVar[2u].y;
        float _222 = RVar[2u].y;
        float _224 = (_220 * _222) + (_207 * _209);
        float _226 = RVar[126u].y;
        float _229 = clamp((clamp((_185 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0) + _226) * 0.5, 0.0, 1.0);
        float _231 = RVar[127u].y;
        float _234 = clamp((clamp((_190 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0) + _231) * 0.5, 0.0, 1.0);
        float _236 = RVar[127u].x;
        float _239 = clamp((clamp((_177 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0) + _236) * 0.5, 0.0, 1.0);
        RVar[123u].x = _224;
        RVar[127u].y = _229;
        RVar[127u].z = _234;
        RVar[127u].w = _239;
        float _245 = RVar[1u].x;
        float _249 = RVar[2u].x;
        float _251 = RVar[2u].x;
        float _253 = (_249 * _251) + _224;
        float _255 = RVar[1u].z;
        float _259 = RVar[1u].y;
        RVar[123u].y = _253;
        float _270 = RVar[1u].w;
        float _272 = RVar[127u].z;
        float _276 = RVar[1u].w;
        float _278 = RVar[127u].y;
        float _282 = inversesqrt(_253) * 0.5;
        RVar[0u].x = ((_245 + (-_239)) * RVar[1u].w) + RVar[127u].w;
        RVar[0u].y = ((_259 + (-_234)) * _270) + _272;
        RVar[0u].z = ((_255 + (-_229)) * _276) + _278;
        float _287 = RVar[2u].x;
        float _291 = (_287 * _282) + uintBitsToFloat(1056964608u);
        float _293 = RVar[2u].y;
        float _296 = (_293 * _282) + uintBitsToFloat(1056964608u);
        float _298 = RVar[2u].z;
        float _301 = (_298 * _282) + uintBitsToFloat(1056964608u);
        RVar[3u].x = _291;
        RVar[3u].y = _296;
        RVar[3u].z = _301;
        float _306 = RVar[3u].w;
        RVar[2u].x = _291;
        RVar[2u].y = _296;
        RVar[2u].z = _301;
        RVar[2u].w = _306;
        float _314 = RVar[0u].y;
        float _316 = RVar[0u].z;
        float _318 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _314;
        RVar[1u].z = _316;
        RVar[1u].w = _318;
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
    uint _394 = PS_PUSH.alphaFunc >> 8u;
    if (_394 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_394 == 2u)
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
    uint _422 = PS_PUSH.alphaFunc >> 8u;
    if (_422 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_422 == 2u)
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