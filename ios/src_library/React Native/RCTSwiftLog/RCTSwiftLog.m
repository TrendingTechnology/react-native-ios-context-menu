//
//  RCTSwiftLog.m
//  nativeUIModulesTest
//
//  Created by Dominic Go on 6/27/20.
//

#import <React/RCTLog.h>
#import "RCTSwiftLog.h"

@implementation RCTContextMenuSwiftLog

+ (void)info:(NSString *)message file:(NSString *)file line:(NSUInteger)line
{
  _RCTLogNativeInternal(RCTLogLevelInfo, file.UTF8String, (int)line, @"%@", message);
}

+ (void)warn:(NSString *)message file:(NSString *)file line:(NSUInteger)line
{
  _RCTLogNativeInternal(RCTLogLevelWarning, file.UTF8String, (int)line, @"%@", message);
}

+ (void)error:(NSString *)message file:(NSString *)file line:(NSUInteger)line
{
  _RCTLogNativeInternal(RCTLogLevelError, file.UTF8String, (int)line, @"%@", message);
}

+ (void)log:(NSString *)message file:(NSString *)file line:(NSUInteger)line
{
  _RCTLogNativeInternal(RCTLogLevelInfo, file.UTF8String, (int)line, @"%@", message);
}

+ (void)trace:(NSString *)message file:(NSString *)file line:(NSUInteger)line
{
  _RCTLogNativeInternal(RCTLogLevelTrace, file.UTF8String, (int)line, @"%@", message);
}

@end
