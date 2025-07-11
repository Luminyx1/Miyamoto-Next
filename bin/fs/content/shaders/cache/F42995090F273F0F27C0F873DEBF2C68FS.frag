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
    if (stateVar == 0)
    {
        RVar[2u] = texture(cTexMap0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
    }
    if (stateVar == 0)
    {
        float _64 = RVar[1u].x;
        float _66 = RVar[1u].y;
        float _68 = RVar[1u].z;
        float _73 = RVar[1u].x;
        float _75 = RVar[1u].y;
        float _77 = RVar[1u].z;
        RVar[5u].w = RVar[2u].w;
        float _89 = inversesqrt(dot(vec4(_64, _66, _68, uintBitsToFloat(2147483648u)), vec4(_73, _75, _77, uintBitsToFloat(0u))));
        RVar[4u].w = uintBitsToFloat(1065353216u);
        float _93 = RVar[1u].z;
        float _96 = RVar[1u].x;
        float _97 = _96 * _89;
        float _99 = RVar[1u].y;
        float _100 = _99 * _89;
        RVar[1u].x = (_97 * uintBitsToFloat(1056964608u)) + uintBitsToFloat(1056964608u);
        RVar[4u].y = (_100 * uintBitsToFloat(1056964608u)) + uintBitsToFloat(1056964608u);
        RVar[4u].z = ((_93 * _89) * uintBitsToFloat(1056964608u)) + uintBitsToFloat(1056964608u);
        RVar[4u].x = (_97 * uintBitsToFloat(1056964608u)) + uintBitsToFloat(1056964608u);
        RVar[1u].y = ((-_100) * uintBitsToFloat(1056964608u)) + uintBitsToFloat(1056964608u);
    }
    if (stateVar == 0)
    {
        vec4 _143 = texture(cLightMap0, vec4(RVar[1u].xy, 0.0, RVar[1u].x).xy);
        RVar[3u] = vec4(_143.x, _143.y, _143.z, RVar[3u].w);
        vec4 _158 = texture(cLightMap1, vec4(RVar[1u].xy, 0.0, RVar[1u].x).xy);
        RVar[1u] = vec4(_158.x, _158.y, _158.z, RVar[1u].w);
    }
    if (stateVar == 0)
    {
        float _167 = RVar[2u].y;
        float _169 = RVar[3u].y;
        float _171 = RVar[1u].y;
        float _173 = (_167 * _169) + _171;
        float _175 = RVar[2u].x;
        float _177 = RVar[3u].x;
        float _179 = RVar[1u].x;
        float _181 = (_175 * _177) + _179;
        float _183 = RVar[2u].z;
        float _185 = RVar[3u].z;
        float _187 = RVar[1u].z;
        float _189 = (_183 * _185) + _187;
        RVar[127u].x = _173;
        RVar[127u].y = _181;
        RVar[127u].w = _189;
        float _195 = RVar[0u].z;
        float _199 = RVar[0u].y;
        float _213 = RVar[0u].w;
        float _215 = RVar[127u].x;
        float _219 = RVar[0u].w;
        float _221 = RVar[127u].w;
        RVar[5u].x = ((RVar[0u].x + (-_181)) * RVar[0u].w) + RVar[127u].y;
        RVar[5u].y = ((_199 + (-_173)) * _213) + _215;
        RVar[5u].z = ((_195 + (-_189)) * _219) + _221;
        float _230 = RVar[4u].y;
        float _232 = RVar[4u].z;
        float _234 = RVar[4u].w;
        RVar[1u].x = RVar[4u].x;
        RVar[1u].y = _230;
        RVar[1u].z = _232;
        RVar[1u].w = _234;
        float _242 = RVar[5u].y;
        float _244 = RVar[5u].z;
        float _246 = RVar[5u].w;
        RVar[0u].x = RVar[5u].x;
        RVar[0u].y = _242;
        RVar[0u].z = _244;
        RVar[0u].w = _246;
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
    uint _322 = PS_PUSH.alphaFunc >> 8u;
    if (_322 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_322 == 2u)
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
    uint _350 = PS_PUSH.alphaFunc >> 8u;
    if (_350 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_350 == 2u)
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