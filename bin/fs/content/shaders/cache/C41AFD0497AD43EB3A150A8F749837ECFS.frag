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
uniform sampler2D tex_map3;

layout(location = 2) in vec4 PARAM_2;
layout(location = 1) in vec4 PARAM_1;
layout(location = 0) in vec4 PARAM_0;
layout(location = 3) in vec4 PARAM_3;
layout(location = 4) in vec4 PARAM_4;
layout(location = 5) in vec4 PARAM_5;
layout(location = 6) in vec4 PARAM_6;
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
    RVar[6u] = PARAM_6;
    if (stateVar == 0)
    {
        vec4 _72 = texture(tex_map2, vec4(RVar[5u].xy, 0.0, RVar[5u].x).xy);
        RVar[5u] = vec4(_72.x, _72.y, _72.z, RVar[5u].w);
        RVar[3u] = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[4u] = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        vec4 _113 = texture(tex_map3, vec4(RVar[6u].xy, 0.0, RVar[6u].x).xy);
        RVar[6u] = vec4(_113.x, _113.y, _113.z, RVar[6u].w);
    }
    if (stateVar == 0)
    {
        float _123 = RVar[0u].w;
        float _129 = RVar[5u].z;
        float _134 = (_129 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _136 = RVar[5u].y;
        float _140 = (_136 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _142 = RVar[5u].x;
        float _146 = (_142 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _148 = RVar[6u].x;
        RVar[123u].y = _134;
        RVar[123u].z = _140;
        RVar[123u].w = _146;
        RVar[127u].y = (-_148) + uintBitsToFloat(1065353216u);
        float _162 = RVar[3u].w;
        float _165 = (clamp(_123 + uintBitsToFloat(0u), 0.0, 1.0) * _162) + uintBitsToFloat(0u);
        float _173 = RVar[6u].y;
        RVar[123u].y = _165;
        RVar[127u].x = (-_173) + uintBitsToFloat(1065353216u);
        float _180 = RVar[3u].x;
        float _183 = (clamp(_146 + uintBitsToFloat(0u), 0.0, 1.0) * _180) + uintBitsToFloat(0u);
        float _185 = RVar[6u].z;
        float _190 = RVar[3u].z;
        float _193 = (clamp(_134 + uintBitsToFloat(0u), 0.0, 1.0) * _190) + uintBitsToFloat(0u);
        float _195 = RVar[3u].y;
        float _198 = (clamp(_140 + uintBitsToFloat(0u), 0.0, 1.0) * _195) + uintBitsToFloat(0u);
        RVar[123u].x = _183;
        RVar[126u].y = (-_185) + uintBitsToFloat(1065353216u);
        RVar[123u].z = _193;
        RVar[123u].w = _198;
        float _214 = RVar[4u].w;
        float _217 = (clamp(_165 + uintBitsToFloat(0u), 0.0, 1.0) * _214) + uintBitsToFloat(0u);
        RVar[123u].z = _217;
        RVar[3u].w = uintBitsToFloat(1065353216u);
        float _225 = RVar[4u].x;
        float _228 = (clamp(_183 + uintBitsToFloat(0u), 0.0, 1.0) * _225) + uintBitsToFloat(0u);
        float _235 = RVar[4u].z;
        float _238 = (clamp(_193 + uintBitsToFloat(0u), 0.0, 1.0) * _235) + uintBitsToFloat(0u);
        float _240 = RVar[4u].y;
        float _243 = (clamp(_198 + uintBitsToFloat(0u), 0.0, 1.0) * _240) + uintBitsToFloat(0u);
        float _245 = RVar[2u].z;
        float _247 = RVar[2u].z;
        RVar[123u].x = _228;
        RVar[125u].y = clamp((_217 + uintBitsToFloat(0u)) * 2.0, 0.0, 1.0);
        RVar[123u].z = _238;
        RVar[123u].w = _243;
        float _264 = RVar[2u].y;
        float _266 = RVar[2u].y;
        float _268 = (_264 * _266) + (_245 * _247);
        RVar[122u].x = _268;
        float _272 = RVar[126u].y;
        float _282 = (clamp(_238 + uintBitsToFloat(0u), 0.0, 1.0) * _272) + CBUFFER_1.values[7].z;
        float _284 = RVar[127u].x;
        float _288 = (clamp(_243 + uintBitsToFloat(0u), 0.0, 1.0) * _284) + CBUFFER_1.values[7].y;
        float _290 = RVar[127u].y;
        float _294 = (clamp(_228 + uintBitsToFloat(0u), 0.0, 1.0) * _290) + CBUFFER_1.values[7].x;
        float _296 = RVar[2u].x;
        float _298 = RVar[2u].x;
        float _300 = (_296 * _298) + _268;
        float _302 = RVar[125u].y;
        RVar[123u].x = _282;
        RVar[123u].y = _288;
        RVar[123u].z = _294;
        RVar[123u].w = _300;
        RVar[4u].w = clamp((_302 + uintBitsToFloat(0u)) * 2.0, 0.0, 1.0);
        float _313 = RVar[0u].z;
        float _315 = RVar[6u].z;
        float _318 = clamp((_313 * _315) + _282, 0.0, 1.0);
        float _320 = RVar[0u].y;
        float _322 = RVar[6u].y;
        float _325 = clamp((_320 * _322) + _288, 0.0, 1.0);
        float _327 = RVar[0u].x;
        float _329 = RVar[6u].x;
        float _332 = clamp((_327 * _329) + _294, 0.0, 1.0);
        float _335 = inversesqrt(_300) * 0.5;
        RVar[127u].y = _318;
        RVar[127u].z = _325;
        RVar[127u].w = _332;
        RVar[127u].x = _335;
        float _341 = RVar[1u].x;
        float _351 = RVar[1u].z;
        float _355 = RVar[1u].y;
        float _359 = RVar[2u].x;
        RVar[3u].y = (RVar[2u].y * _335) + uintBitsToFloat(1056964608u);
        RVar[3u].x = (_359 * _335) + uintBitsToFloat(1056964608u);
        float _372 = RVar[1u].w;
        float _374 = RVar[127u].z;
        float _378 = RVar[1u].w;
        float _380 = RVar[127u].y;
        float _384 = RVar[2u].z;
        float _386 = RVar[127u].x;
        float _389 = (_384 * _386) + uintBitsToFloat(1056964608u);
        RVar[4u].x = ((_341 + (-_332)) * RVar[1u].w) + RVar[127u].w;
        RVar[4u].y = ((_355 + (-_325)) * _372) + _374;
        RVar[4u].z = ((_351 + (-_318)) * _378) + _380;
        RVar[3u].z = _389;
        float _397 = RVar[3u].y;
        float _399 = RVar[3u].w;
        RVar[1u].x = RVar[3u].x;
        RVar[1u].y = _397;
        RVar[1u].z = _389;
        RVar[1u].w = _399;
        float _407 = RVar[4u].y;
        float _409 = RVar[4u].z;
        float _411 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _407;
        RVar[0u].z = _409;
        RVar[0u].w = _411;
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
    uint _487 = PS_PUSH.alphaFunc >> 8u;
    if (_487 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_487 == 2u)
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
    uint _515 = PS_PUSH.alphaFunc >> 8u;
    if (_515 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_515 == 2u)
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