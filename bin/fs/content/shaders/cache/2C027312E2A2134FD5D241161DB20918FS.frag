#version 430

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D tex_map2;
uniform sampler2D tex_map0;

layout(location = 2) in vec4 PARAM_2;
layout(location = 1) in vec4 PARAM_1;
layout(location = 0) in vec4 PARAM_0;
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
    RVar[1u] = PARAM_1;
    RVar[2u] = PARAM_0;
    RVar[3u] = PARAM_3;
    RVar[4u] = PARAM_4;
    if (stateVar == 0)
    {
        vec4 _64 = texture(tex_map2, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_64.x, _64.y, _64.z, RVar[4u].w);
        vec4 _79 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_79.x, _79.y, _79.z, RVar[3u].w);
    }
    if (stateVar == 0)
    {
        float _89 = RVar[0u].w;
        float _95 = RVar[0u].z;
        float _100 = (_95 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _102 = RVar[0u].y;
        float _106 = (_102 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        float _108 = RVar[0u].x;
        float _112 = (_108 * uintBitsToFloat(1065353216u)) + uintBitsToFloat(0u);
        RVar[123u].y = _100;
        RVar[123u].z = _106;
        RVar[123u].w = _112;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _120 = RVar[4u].x;
        float _127 = RVar[4u].z;
        float _131 = RVar[4u].y;
        float _135 = RVar[2u].z;
        float _137 = RVar[2u].z;
        RVar[127u].y = clamp(clamp(_89 + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0);
        float _142 = RVar[3u].y;
        float _145 = (clamp(_131 + _106, 0.0, 1.0) * _142) + uintBitsToFloat(0u);
        float _147 = RVar[3u].x;
        float _150 = (clamp(_120 + _112, 0.0, 1.0) * _147) + uintBitsToFloat(0u);
        float _152 = RVar[3u].z;
        float _155 = (clamp(_127 + _100, 0.0, 1.0) * _152) + uintBitsToFloat(0u);
        float _157 = RVar[2u].y;
        float _159 = RVar[2u].y;
        float _161 = (_157 * _159) + (_135 * _137);
        RVar[123u].x = _145;
        RVar[123u].y = _150;
        RVar[123u].w = _155;
        RVar[122u].x = _161;
        float _169 = clamp(_155 + uintBitsToFloat(0u), 0.0, 1.0);
        float _172 = clamp(_145 + uintBitsToFloat(0u), 0.0, 1.0);
        float _175 = clamp(_150 + uintBitsToFloat(0u), 0.0, 1.0);
        float _177 = RVar[2u].x;
        float _179 = RVar[2u].x;
        float _181 = (_177 * _179) + _161;
        float _183 = RVar[127u].y;
        RVar[127u].x = _169;
        RVar[127u].y = _172;
        RVar[127u].z = _175;
        RVar[123u].w = _181;
        RVar[3u].w = clamp(_183 + uintBitsToFloat(0u), 0.0, 1.0);
        float _193 = RVar[4u].z;
        float _196 = (_193 * _169) + uintBitsToFloat(0u);
        float _198 = RVar[4u].y;
        float _201 = (_198 * _172) + uintBitsToFloat(0u);
        float _203 = RVar[4u].x;
        float _206 = (_203 * _175) + uintBitsToFloat(0u);
        float _209 = inversesqrt(_181) * 0.5;
        RVar[123u].x = _196;
        RVar[123u].y = _201;
        RVar[123u].z = _206;
        RVar[126u].x = _209;
        float _222 = RVar[127u].x;
        float _224 = clamp(_222 + _196, 0.0, 1.0);
        float _226 = RVar[127u].y;
        float _228 = clamp(_226 + _201, 0.0, 1.0);
        float _230 = RVar[127u].z;
        float _232 = clamp(_230 + _206, 0.0, 1.0);
        float _234 = RVar[2u].y;
        RVar[0u].x = (RVar[2u].x * _209) + uintBitsToFloat(1056964608u);
        RVar[127u].y = _224;
        RVar[127u].z = _228;
        RVar[127u].w = _232;
        RVar[0u].y = (_234 * _209) + uintBitsToFloat(1056964608u);
        float _244 = RVar[1u].x;
        float _248 = RVar[1u].z;
        float _252 = RVar[1u].y;
        RVar[0u].z = (RVar[2u].z * RVar[126u].x) + uintBitsToFloat(1056964608u);
        float _270 = RVar[1u].w;
        float _272 = RVar[127u].z;
        float _276 = RVar[1u].w;
        float _278 = RVar[127u].y;
        RVar[3u].x = ((_244 + (-_232)) * RVar[1u].w) + RVar[127u].w;
        RVar[3u].y = ((_252 + (-_228)) * _270) + _272;
        RVar[3u].z = ((_248 + (-_224)) * _276) + _278;
        float _287 = RVar[0u].y;
        float _289 = RVar[0u].z;
        float _291 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _287;
        RVar[1u].z = _289;
        RVar[1u].w = _291;
        float _299 = RVar[3u].y;
        float _301 = RVar[3u].z;
        float _303 = RVar[3u].w;
        RVar[0u].x = RVar[3u].x;
        RVar[0u].y = _299;
        RVar[0u].z = _301;
        RVar[0u].w = _303;
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
    uint _379 = PS_PUSH.alphaFunc >> 8u;
    if (_379 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_379 == 2u)
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
    uint _407 = PS_PUSH.alphaFunc >> 8u;
    if (_407 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_407 == 2u)
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