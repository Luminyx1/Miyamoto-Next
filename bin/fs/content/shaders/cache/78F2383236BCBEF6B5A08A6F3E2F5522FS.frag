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
        vec4 _68 = texture(tex_map0, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_68.x, _68.y, _68.z, RVar[3u].w);
        vec4 _83 = texture(tex_map2, vec4(RVar[5u].xy, 0.0, RVar[5u].x).xy);
        RVar[5u] = vec4(_83.x, _83.y, _83.z, RVar[5u].w);
        vec4 _98 = texture(tex_map1, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_98.x, _98.y, _98.z, RVar[4u].w);
    }
    if (stateVar == 0)
    {
        float _115 = RVar[0u].z;
        float _117 = RVar[3u].z;
        float _120 = (_115 * _117) + uintBitsToFloat(0u);
        float _122 = RVar[0u].y;
        float _124 = RVar[3u].y;
        float _127 = (_122 * _124) + uintBitsToFloat(0u);
        float _129 = RVar[0u].x;
        float _131 = RVar[3u].x;
        float _134 = (_129 * _131) + uintBitsToFloat(0u);
        float _136 = RVar[0u].y;
        float _138 = RVar[4u].y;
        RVar[127u].x = (RVar[0u].x * RVar[4u].x) + uintBitsToFloat(0u);
        RVar[123u].y = _120;
        RVar[123u].z = _127;
        RVar[123u].w = _134;
        RVar[127u].y = (_136 * _138) + uintBitsToFloat(0u);
        float _167 = RVar[0u].w;
        RVar[126u].y = (RVar[0u].z * RVar[4u].z) + uintBitsToFloat(0u);
        float _174 = RVar[5u].x;
        float _177 = (clamp(_134 + uintBitsToFloat(0u), 0.0, 1.0) * _174) + uintBitsToFloat(0u);
        float _182 = RVar[5u].z;
        float _185 = (clamp(_120 + uintBitsToFloat(0u), 0.0, 1.0) * _182) + uintBitsToFloat(0u);
        float _187 = RVar[5u].y;
        float _190 = (clamp(_127 + uintBitsToFloat(0u), 0.0, 1.0) * _187) + uintBitsToFloat(0u);
        RVar[123u].x = _177;
        RVar[123u].z = _185;
        RVar[123u].w = _190;
        RVar[5u].w = uintBitsToFloat(1065353216u);
        float _204 = RVar[2u].z;
        float _206 = RVar[2u].z;
        RVar[0u].w = clamp(clamp(clamp(_167 + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0) + uintBitsToFloat(0u), 0.0, 1.0);
        float _216 = RVar[2u].y;
        float _218 = RVar[2u].y;
        float _220 = (_216 * _218) + (_204 * _206);
        float _222 = RVar[126u].y;
        float _224 = clamp(clamp(_185 + uintBitsToFloat(0u), 0.0, 1.0) + _222, 0.0, 1.0);
        float _226 = RVar[127u].y;
        float _228 = clamp(clamp(_190 + uintBitsToFloat(0u), 0.0, 1.0) + _226, 0.0, 1.0);
        float _230 = RVar[127u].x;
        float _232 = clamp(clamp(_177 + uintBitsToFloat(0u), 0.0, 1.0) + _230, 0.0, 1.0);
        RVar[123u].x = _220;
        RVar[127u].y = _224;
        RVar[127u].z = _228;
        RVar[127u].w = _232;
        float _238 = RVar[1u].x;
        float _242 = RVar[2u].x;
        float _244 = RVar[2u].x;
        float _246 = (_242 * _244) + _220;
        float _248 = RVar[1u].z;
        float _252 = RVar[1u].y;
        RVar[123u].y = _246;
        float _263 = RVar[1u].w;
        float _265 = RVar[127u].z;
        float _269 = RVar[1u].w;
        float _271 = RVar[127u].y;
        float _276 = inversesqrt(_246) * 0.5;
        RVar[0u].x = ((_238 + (-_232)) * RVar[1u].w) + RVar[127u].w;
        RVar[0u].y = ((_252 + (-_228)) * _263) + _265;
        RVar[0u].z = ((_248 + (-_224)) * _269) + _271;
        float _281 = RVar[2u].x;
        float _285 = (_281 * _276) + uintBitsToFloat(1056964608u);
        float _287 = RVar[2u].y;
        float _290 = (_287 * _276) + uintBitsToFloat(1056964608u);
        float _292 = RVar[2u].z;
        float _295 = (_292 * _276) + uintBitsToFloat(1056964608u);
        RVar[5u].x = _285;
        RVar[5u].y = _290;
        RVar[5u].z = _295;
        float _300 = RVar[5u].w;
        RVar[2u].x = _285;
        RVar[2u].y = _290;
        RVar[2u].z = _295;
        RVar[2u].w = _300;
        float _308 = RVar[0u].y;
        float _310 = RVar[0u].z;
        float _312 = RVar[0u].w;
        RVar[1u].x = RVar[0u].x;
        RVar[1u].y = _308;
        RVar[1u].z = _310;
        RVar[1u].w = _312;
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
    uint _388 = PS_PUSH.alphaFunc >> 8u;
    if (_388 == 1u)
    {
        _pixelTmp = vec4(1.0);
    }
    else
    {
        if (_388 == 2u)
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
    uint _416 = PS_PUSH.alphaFunc >> 8u;
    if (_416 == 1u)
    {
        _pixelTmp_1 = vec4(1.0);
    }
    else
    {
        if (_416 == 2u)
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