//
//  UniqueDeviceId.h
//	MIT Licensed

#import <Foundation/Foundation.h>


#import <Foundation/Foundation.h>
#ifdef CORDOVA_FRAMEWORK
#import <Cordova/CDVPlugin.h>
#else
#import "CDVPlugin.h"
#endif

@interface UniqueDeviceId : CDVPlugin {
}

- (void)getUniqueDeviceId:(NSMutableArray*)args withDict:(NSMutableDictionary*)opt;
- (void)getUniqueGlobalDeviceId:(NSMutableArray*)args withDict:(NSMutableDictionary*)opt;

@end
