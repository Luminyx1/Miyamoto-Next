#-------------------------------------------------------------------------------
.SUFFIXES:
#-------------------------------------------------------------------------------

ifeq ($(strip $(DEVKITPRO)),)
$(error "Please set DEVKITPRO in your environment. export DEVKITPRO=<path to>/devkitpro")
endif

TOPDIR ?= $(CURDIR)

include $(DEVKITPRO)/wut/share/wut_rules

#-------------------------------------------------------------------------------
# TARGET is the name of the output
# BUILD is the directory where object files & intermediate files will be placed
# SOURCES is a list of directories containing source code
# DATA is a list of directories containing data files
# INCLUDES is a list of directories containing header files
#-------------------------------------------------------------------------------
TARGET		:=	Miyamoto-Next-Debug
BUILD		:=	build
SOURCES		:=	../rio/src \
				../rio/src/audio \
				../rio/src/container \
				../rio/src/controller \
				../rio/src/controller/cafe \
				../rio/src/filedevice \
				../rio/src/filedevice/cafe \
				../rio/src/gfx \
				../rio/src/gfx/cafe \
				../rio/src/gfx/lyr \
				../rio/src/gfx/mdl \
				../rio/src/gfx/mdl/res \
				../rio/src/gpu \
				../rio/src/gpu/cafe \
				../rio/src/math \
				../rio/src/math/impl \
				../rio/src/task \
				src \
				src/actor \
				src/course \
				src/enemy \
				src/graphics \
				src/item \
				src/map_obj \
				src/resource \
				src/ui \
				../imgui-wiiu \
				../imgui-wiiu/backends/wiiu \
				../NSMBU_Projects/agl-next/lib/rio_utils/src/codec \
				../NSMBU_Projects/agl-next/lib/rio_utils/src/container \
				../NSMBU_Projects/agl-next/lib/rio_utils/src/resource \
				../NSMBU_Projects/ModelStuff-next/src/distant_view \
				../NSMBU_Projects/ModelStuff-next/src/graphics \
				../NSMBU_Projects/ModelStuff-next/src/stream \
				../NSMBU_Projects/ModelStuff-next/src/system \
				../NSMBU_Projects/agl-next/src/common \
				../NSMBU_Projects/agl-next/src/detail \
				../NSMBU_Projects/agl-next/src/g3d \
				../NSMBU_Projects/agl-next/src/postfx \
				../NSMBU_Projects/agl-next/src/utility \
				../NSMBU_Projects/NW4F-G3d-SDK_Headers-NSMBU/src/nw/g3d \
				../NSMBU_Projects/NW4F-G3d-SDK_Headers-NSMBU/src/nw/g3d/res \
				../NSMBU_Projects/NW4F-G3d-SDK_Headers-NSMBU/src/nw/g3d/math \
				../NSMBU_Projects/NW4F-G3d-SDK_Headers-NSMBU/src/nw/g3d/fnd
DATA		:=	data
INCLUDES	:=	../rio/include \
				include \
				../imgui-wiiu \
				../imgui-wiiu/backends/wiiu \
				../NSMBU_Projects/agl-next/lib/rio_utils/include \
				../NSMBU_Projects/ModelStuff-next/include \
				../NSMBU_Projects/CafeSDKWrappers/cafe_wut \
				../NSMBU_Projects/agl-next/include \
				../NSMBU_Projects/NW4F-G3d-SDK_Headers-NSMBU/include

#-------------------------------------------------------------------------------
# options for code generation
#-------------------------------------------------------------------------------
CFLAGS	:=	-Wall -Wfatal-errors -Wmissing-include-dirs -Wundef -Wredundant-decls -Wcast-align \
			-Wno-nonnull-compare -Wno-switch \
			-Og -g \
			-ffunction-sections -fdata-sections \
			$(MACHDEP)

CFLAGS	+=	$(INCLUDE) -D__WIIU__ -D__WUT__ -Dcafe \
			-DNW_DEBUG \
			-DRIO_DEBUG \
			-DRIO_CAFE_MAIN_FILE_DEVICE_AS_CONTENT

CXXFLAGS	:= $(CFLAGS) -std=c++20

ASFLAGS	:=	-g $(ARCH)
LDFLAGS	=	-g $(ARCH) $(RPXSPECS) -Wl,-Map,$(notdir $*.map)

LIBS	:= -lwut

#-------------------------------------------------------------------------------
# list of directories containing libraries, this must be the top level
# containing include and lib
#-------------------------------------------------------------------------------
LIBDIRS	:= $(WUT_ROOT)


#-------------------------------------------------------------------------------
# no real need to edit anything past this point unless you need to add additional
# rules for different file extensions
#-------------------------------------------------------------------------------
ifneq ($(BUILD),$(notdir $(CURDIR)))
#-------------------------------------------------------------------------------

export OUTPUT	:=	$(CURDIR)/bin/fs/code/$(TARGET)
export TOPDIR	:=	$(CURDIR)

export VPATH	:=	$(foreach dir,$(SOURCES),$(CURDIR)/$(dir)) \
			$(foreach dir,$(DATA),$(CURDIR)/$(dir))

export DEPSDIR	:=	$(CURDIR)/$(BUILD)

CFILES		:=	$(foreach dir,$(SOURCES),$(notdir $(wildcard $(dir)/*.c)))
CPPFILES	:=	$(foreach dir,$(SOURCES),$(notdir $(wildcard $(dir)/*.cpp)))
SFILES		:=	$(foreach dir,$(SOURCES),$(notdir $(wildcard $(dir)/*.s)))
BINFILES	:=	$(foreach dir,$(DATA),$(notdir $(wildcard $(dir)/*.*)))

#-------------------------------------------------------------------------------
# use CXX for linking C++ projects, CC for standard C
#-------------------------------------------------------------------------------
ifeq ($(strip $(CPPFILES)),)
#-------------------------------------------------------------------------------
	export LD	:=	$(CC)
#-------------------------------------------------------------------------------
else
#-------------------------------------------------------------------------------
	export LD	:=	$(CXX)
#-------------------------------------------------------------------------------
endif
#-------------------------------------------------------------------------------

export OFILES_BIN	:=	$(addsuffix .o,$(BINFILES))
export OFILES_SRC	:=	$(CPPFILES:.cpp=.o) $(CFILES:.c=.o) $(SFILES:.s=.o)
export OFILES 	:=	$(OFILES_BIN) $(OFILES_SRC)
export HFILES_BIN	:=	$(addsuffix .h,$(subst .,_,$(BINFILES)))

export INCLUDE	:=	$(foreach dir,$(INCLUDES),-I$(CURDIR)/$(dir)) \
			$(foreach dir,$(LIBDIRS),-I$(dir)/include) \
			-I$(CURDIR)/$(BUILD)

export LIBPATHS	:=	$(foreach dir,$(LIBDIRS),-L$(dir)/lib)

.PHONY: $(BUILD) clean all

#-------------------------------------------------------------------------------
all: $(BUILD)

$(BUILD):
	@[ -d $@ ] || mkdir -p $@
	@$(MAKE) --no-print-directory -C $(BUILD) -f $(CURDIR)/Makefile

#-------------------------------------------------------------------------------
clean:
	@echo clean ...
	@rm -fr $(BUILD) $(OUTPUT).rpx $(OUTPUT).elf

#-------------------------------------------------------------------------------
else
.PHONY:	all

DEPENDS	:=	$(OFILES:.o=.d)

#-------------------------------------------------------------------------------
# main targets
#-------------------------------------------------------------------------------
all	:	$(OUTPUT).rpx

$(OUTPUT).rpx	:	$(OUTPUT).elf
$(OUTPUT).elf	:	$(OFILES)

$(OFILES_SRC)	: $(HFILES_BIN)

#-------------------------------------------------------------------------------
# you need a rule like this for each extension you use as binary data
#-------------------------------------------------------------------------------
%.bin.o	%_bin.h :	%.bin
#-------------------------------------------------------------------------------
	@echo $(notdir $<)
	@$(bin2o)

-include $(DEPENDS)

#-------------------------------------------------------------------------------
endif
#-------------------------------------------------------------------------------
