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
        vec4 _64 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_64.x, _64.y, _64.z, RVar[4u].w);
        vec4 _79 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_79.x, _79.y, _79.z, RVar[3u].w);
    }
    if (stateVar == 0)
    {
        float _89 = RVar[0u].x;
        float _91 = RVar[4u].x;
        float _94 = (_89 * _91) + uintBitsToFloat(0u);
        float _96 = RVar[0u].w;
        float _102 = RVar[0u].z;
        float _104 = RVar[4u].z;
        float _107 = (_102 * _104) + uintBitsToFloat(0u);
        float _109 = RVar[0u].y;
        float _111 = RVar[4u].y;
        float _114 = (_109 * _111) + uintBitsToFloat(0u);
        RVar[123u].x = _94;
        RVar[123u].z = _107;
        RVar[123u].w = _114;
        RVar[0u].w = uintBitsToFloat(1065353216u);
        float _132 = RVar[2u].z;
        float _134 = RVar[2u].z;
        RVar[4u].w = clamp(clamp(_96 + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0);
        float _145 = RVar[3u].z;
        float _148 = (clamp((_107 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0) * _145) + uintBitsToFloat(0u);
        float _150 = RVar[3u].y;
        float _153 = (clamp((_114 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0) * _150) + uintBitsToFloat(0u);
        float _155 = RVar[3u].x;
        float _158 = (clamp((_94 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0) * _155) + uintBitsToFloat(0u);
        float _160 = RVar[2u].y;
        float _162 = RVar[2u].y;
        float _164 = (_160 * _162) + (_132 * _134);
        RVar[123u].x = _148;
        RVar[123u].y = _153;
        RVar[123u].z = _158;
        RVar[122u].x = _164;
        float _171 = RVar[2u].x;
        float _173 = RVar[2u].x;
        float _175 = (_171 * _173) + _164;
        float _179 = clamp((_148 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0);
        float _183 = clamp((_153 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0);
        float _187 = clamp((_158 + uintBitsToFloat(0u)) * 0.5, 0.0, 1.0);
        RVar[123u].x = _175;
        RVar[127u].y = _179;
        RVar[127u].z = _183;
        RVar[127u].w = _187;
        float _194 = RVar[1u].x;
        float _198 = RVar[1u].z;
        float _202 = RVar[1u].y;
        float _206 = inversesqrt(_175) * 0.5;
        RVar[127u].x = _206;
        float _215 = RVar[1u].w;
        float _217 = RVar[127u].z;
        float _221 = RVar[1u].w;
        float _223 = RVar[127u].y;
        float _227 = RVar[2u].x;
        RVar[4u].x = ((_194 + (-_187)) * RVar[1u].w) + RVar[127u].w;
        RVar[4u].y = ((_202 + (-_183)) * _215) + _217;
        RVar[4u].z = ((_198 + (-_179)) * _221) + _223;
        RVar[0u].x = (_227 * _206) + uintBitsToFloat(1056964608u);
        float _237 = RVar[2u].y;
        float _239 = RVar[127u].x;
        float _242 = (_237 * _239) + uintBitsToFloat(1056964608u);
        float _244 = RVar[2u].z;
        float _246 = RVar[127u].x;
        float _249 = (_244 * _246) + uintBitsToFloat(1056964608u);
        RVar[0u].y = _242;
        RVar[0u].z = _249;
        float _255 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _242;
        RVar[1u].z = _249;
        RVar[1u].w = _255;
        float _263 = RVar[4u].y;
        float _265 = RVar[4u].z;
        float _267 = RVar[4u].w;
        RVar[0u].x = RVar[4u].x;
        RVar[0u].y = _263;
        RVar[0u].z = _265;
        RVar[0u].w = _267;
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
    uint _343 = PS_PUSH.alphaFunc >> 8u;
    if (_343 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_343 == 2u)
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
    uint _371 = PS_PUSH.alphaFunc >> 8u;
    if (_371 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_371 == 2u)
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