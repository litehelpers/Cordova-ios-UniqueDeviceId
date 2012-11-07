//
//  UniqueDeviceId.h
//	MIT Licensed

#import <Foundation/Foundation.h>

#import <CORDOVA/CDVPlugin.h>

@interface UniqueDeviceId : CDVPlugin {
}

- (void)getUniqueDeviceId:(NSMutableArray*)args withDict:(NSMutableDictionary*)opt;
- (void)getUniqueGlobalDeviceId:(NSMutableArray*)args withDict:(NSMutableDictionary*)opt;

@end
