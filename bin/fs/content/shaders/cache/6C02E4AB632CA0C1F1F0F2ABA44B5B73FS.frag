#version 430

struct PS_PUSH_DATA
{
    uint alphaFunc;
    float alphaRef;
    uint needsPremultiply; uint uItemID; int uIsSelected;
};

uniform PS_PUSH_DATA PS_PUSH;

uniform sampler2D cTexMap0;
uniform sampler2D cLightMap0;
uniform sampler2D cLightMap1;

layout(location = 0) in vec4 PARAM_0;
layout(location = 1) in vec4 PARAM_1;
layout(location = 2) in vec4 PARAM_2;
layout(location = 3) in vec4 PARAM_3;
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
    RVar[2u] = PARAM_2;
    RVar[3u] = PARAM_3;
    if (stateVar == 0)
    {
        RVar[3u] = texture(cTexMap0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
    }
    if (stateVar == 0)
    {
        float _68 = RVar[2u].x;
        float _70 = RVar[2u].y;
        float _72 = RVar[2u].z;
        float _77 = RVar[2u].x;
        float _79 = RVar[2u].y;
        float _81 = RVar[2u].z;
        RVar[4u].y = RVar[0u].x * RVar[3u].x;
        float _98 = RVar[0u].w;
        float _100 = RVar[3u].w;
        float _103 = RVar[0u].z;
        float _105 = RVar[3u].z;
        float _108 = inversesqrt(dot(vec4(_68, _70, _72, uintBitsToFloat(2147483648u)), vec4(_77, _79, _81, uintBitsToFloat(0u))));
        RVar[0u].x = RVar[0u].y * RVar[3u].y;
        RVar[0u].w = _103 * _105;
        float _112 = RVar[2u].z;
        float _115 = RVar[2u].x;
        float _116 = _115 * _108;
        float _118 = RVar[2u].y;
        float _119 = _118 * _108;
        RVar[6u].w = _98 * _100;
        RVar[2u].x = (_116 * uintBitsToFloat(1056964608u)) + uintBitsToFloat(1056964608u);
        RVar[5u].y = (_119 * uintBitsToFloat(1056964608u)) + uintBitsToFloat(1056964608u);
        RVar[5u].z = ((_112 * _108) * uintBitsToFloat(1056964608u)) + uintBitsToFloat(1056964608u);
        RVar[5u].x = (_116 * uintBitsToFloat(1056964608u)) + uintBitsToFloat(1056964608u);
        RVar[2u].y = ((-_119) * uintBitsToFloat(1056964608u)) + uintBitsToFloat(1056964608u);
        RVar[5u].w = uintBitsToFloat(1065353216u);
    }
    if (stateVar == 0)
    {
        vec4 _168 = texture(cLightMap0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
        RVar[3u] = vec4(_168.x, _168.y, _168.z, RVar[3u].w);
        vec4 _183 = texture(cLightMap1, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
        RVar[2u] = vec4(_183.x, _183.y, _183.z, RVar[2u].w);
    }
    if (stateVar == 0)
    {
        float _192 = RVar[3u].y;
        float _194 = RVar[0u].x;
        float _196 = RVar[2u].y;
        float _198 = (_192 * _194) + _196;
        float _200 = RVar[3u].x;
        float _202 = RVar[4u].y;
        float _204 = RVar[2u].x;
        float _206 = (_200 * _202) + _204;
        float _208 = RVar[3u].z;
        float _210 = RVar[0u].w;
        float _212 = RVar[2u].z;
        float _214 = (_208 * _210) + _212;
        RVar[127u].x = _198;
        RVar[127u].y = _206;
        RVar[127u].w = _214;
        float _220 = RVar[1u].z;
        float _224 = RVar[1u].y;
        float _238 = RVar[1u].w;
        float _240 = RVar[127u].x;
        float _244 = RVar[1u].w;
        float _246 = RVar[127u].w;
        RVar[6u].x = ((RVar[1u].x + (-_206)) * RVar[1u].w) + RVar[127u].y;
        RVar[6u].y = ((_224 + (-_198)) * _238) + _240;
        RVar[6u].z = ((_220 + (-_214)) * _244) + _246;
        float _255 = RVar[5u].y;
        float _257 = RVar[5u].z;
        float _259 = RVar[5u].w;
        RVar[1u].x = RVar[5u].x;
        RVar[1u].y = _255;
        RVar[1u].z = _257;
        RVar[1u].w = _259;
        float _267 = RVar[6u].y;
        float _269 = RVar[6u].z;
        float _271 = RVar[6u].w;
        RVar[0u].x = RVar[6u].x;
        RVar[0u].y = _267;
        RVar[0u].z = _269;
        RVar[0u].w = _271;
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
    uint _347 = PS_PUSH.alphaFunc >> 8u;
    if (_347 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_347 == 2u)
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
    uint _375 = PS_PUSH.alphaFunc >> 8u;
    if (_375 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_375 == 2u)
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