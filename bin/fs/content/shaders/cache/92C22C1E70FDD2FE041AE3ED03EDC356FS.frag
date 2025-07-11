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

uniform sampler2D tex_map0;
uniform sampler2D tex_map2;
uniform sampler2D tex_map1;

layout(location = 0) in vec4 PARAM_0;
layout(location = 1) in vec4 PARAM_1;
layout(location = 2) in vec4 PARAM_2;
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
    RVar[0u] = PARAM_0;
    RVar[1u] = PARAM_1;
    RVar[2u] = PARAM_2;
    RVar[3u] = PARAM_3;
    RVar[4u] = PARAM_4;
    if (stateVar == 0)
    {
        RVar[2u] = texture(tex_map0, vec4(RVar[2u].xy, 0.0, RVar[2u].x).xy);
        vec4 _77 = texture(tex_map2, vec4(RVar[4u].xy, 0.0, RVar[4u].x).xy);
        RVar[4u] = vec4(_77.x, _77.y, _77.z, RVar[4u].w);
        vec4 _92 = texture(tex_map1, vec4(RVar[3u].xy, 0.0, RVar[3u].x).xy);
        RVar[3u] = vec4(_92.x, _92.y, _92.z, RVar[3u].w);
    }
    if (stateVar == 0)
    {
        float _110 = RVar[2u].z;
        float _113 = (CBUFFER_1.values[4].z * _110) + uintBitsToFloat(0u);
        float _117 = RVar[2u].w;
        float _120 = (CBUFFER_1.values[4].w * _117) + uintBitsToFloat(0u);
        float _124 = RVar[2u].y;
        float _127 = (CBUFFER_1.values[4].y * _124) + uintBitsToFloat(0u);
        float _131 = RVar[2u].x;
        float _134 = (CBUFFER_1.values[4].x * _131) + uintBitsToFloat(0u);
        RVar[123u].x = _113;
        RVar[123u].y = _120;
        RVar[123u].z = _127;
        RVar[123u].w = _134;
        RVar[5u].w = uintBitsToFloat(1065353216u);
        float _147 = clamp(_120 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[127u].z = clamp(_113 + uintBitsToFloat(0u), 0.0, 1.0);
        RVar[2u].w = uintBitsToFloat(1065353216u);
        float _167 = RVar[4u].z;
        float _170 = (_147 * _167) + uintBitsToFloat(0u);
        float _172 = RVar[4u].y;
        float _175 = (_147 * _172) + uintBitsToFloat(0u);
        float _177 = RVar[4u].x;
        float _180 = (_147 * _177) + uintBitsToFloat(0u);
        float _182 = RVar[3u].y;
        RVar[127u].x = (clamp(_134 + uintBitsToFloat(0u), 0.0, 1.0) * RVar[3u].x) + uintBitsToFloat(0u);
        RVar[123u].y = _170;
        RVar[123u].z = _175;
        RVar[123u].w = _180;
        RVar[127u].y = (clamp(_127 + uintBitsToFloat(0u), 0.0, 1.0) * _182) + uintBitsToFloat(0u);
        float _192 = RVar[127u].z;
        float _194 = RVar[3u].z;
        float _197 = (_192 * _194) + uintBitsToFloat(0u);
        float _212 = RVar[1u].z;
        float _214 = RVar[1u].z;
        RVar[123u].x = _197;
        float _218 = RVar[1u].y;
        float _220 = RVar[1u].y;
        float _222 = (_218 * _220) + (_212 * _214);
        float _224 = clamp(clamp(CBUFFER_1.values[10].z + _170, 0.0, 1.0) + _197, 0.0, 1.0);
        float _226 = RVar[127u].y;
        float _228 = clamp(clamp(CBUFFER_1.values[10].y + _175, 0.0, 1.0) + _226, 0.0, 1.0);
        float _230 = RVar[127u].x;
        float _232 = clamp(clamp(CBUFFER_1.values[10].x + _180, 0.0, 1.0) + _230, 0.0, 1.0);
        RVar[123u].x = _222;
        RVar[127u].y = _224;
        RVar[127u].z = _228;
        RVar[127u].w = _232;
        float _238 = RVar[0u].x;
        float _242 = RVar[1u].x;
        float _244 = RVar[1u].x;
        float _246 = (_242 * _244) + _222;
        float _248 = RVar[0u].z;
        float _252 = RVar[0u].y;
        RVar[123u].y = _246;
        float _263 = RVar[0u].w;
        float _265 = RVar[127u].z;
        float _269 = RVar[0u].w;
        float _271 = RVar[127u].y;
        float _276 = inversesqrt(_246) * 0.5;
        RVar[5u].x = ((_238 + (-_232)) * RVar[0u].w) + RVar[127u].w;
        RVar[5u].y = ((_252 + (-_228)) * _263) + _265;
        RVar[5u].z = ((_248 + (-_224)) * _269) + _271;
        float _281 = RVar[1u].x;
        float _285 = (_281 * _276) + uintBitsToFloat(1056964608u);
        float _287 = RVar[1u].y;
        float _290 = (_287 * _276) + uintBitsToFloat(1056964608u);
        float _292 = RVar[1u].z;
        float _295 = (_292 * _276) + uintBitsToFloat(1056964608u);
        RVar[2u].x = _285;
        RVar[2u].y = _290;
        RVar[2u].z = _295;
        float _300 = RVar[2u].w;
        RVar[1u].x = _285;
        RVar[1u].y = _290;
        RVar[1u].z = _295;
        RVar[1u].w = _300;
        float _308 = RVar[5u].y;
        float _310 = RVar[5u].z;
        float _312 = RVar[5u].w;
        RVar[0u].x = RVar[5u].x;
        RVar[0u].y = _308;
        RVar[0u].z = _310;
        RVar[0u].w = _312;
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
    _pixelTmp_1 = RVar[1u];
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