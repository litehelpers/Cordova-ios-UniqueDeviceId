//
//  UniqueDeviceId.m
//	MIT Licensed

#import "UniqueDeviceId.h"

#import "UIDevice+IdentifierAddition.h"

@implementation UniqueDeviceId

- (void)getUniqueDeviceId:(NSMutableArray*)args withDict:(NSMutableDictionary*)opt
{
	NSString *uid = [[UIDevice currentDevice] uniqueDeviceIdentifier];

	NSString* jsCallback = [NSString stringWithFormat:@"window.plugins.uniqueDeviceId._return_callback(\"%@\");", uid];

	[super writeJavascript:jsCallback];
}

- (void)getUniqueGlobalDeviceId:(NSMutableArray*)args withDict:(NSMutableDictionary*)opt
{
	NSString *uid = [[UIDevice currentDevice] uniqueGlobalDeviceIdentifier];

	NSString* jsCallback = [NSString stringWithFormat:@"window.plugins.uniqueDeviceId._return_callback(\"%@\");", uid];

	[super writeJavascript:jsCallback];
}

@end

