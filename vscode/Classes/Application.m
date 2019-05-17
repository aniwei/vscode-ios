//
//  Application.m
//  vscode
//
//  Created by aniwei on 2019/5/10.
//  Copyright © 2019 aniwei. All rights reserved.
//

#import "Application.h"

@interface UIApplication ()
- (void)handleKeyHIDEvent:(void *)event;
- (void)handleKeyUIEvent:(UIEvent *)event;
@end

@implementation Application

+ (Application *)sharedApplication {
    return ((Application *)UIApplication.sharedApplication);
}

- (void)handleKeyHIDEvent:(void *) event {
    NSLog(@"handleKeyHIDEvent: %@",event);
    [super handleKeyHIDEvent:event];
}

- (void)handleKeyUIEvent:(UIEvent *)event {
    NSString *keyCode = [[event valueForKey:@"_keyCode"] stringValue];
    
    if (_keyCommandDelegate) {
        
        BOOL isKeyDown = [[event valueForKey:@"_isKeyDown"] boolValue];
        
        if (isKeyDown) {
            [_keyCommandDelegate onKeyDown:keyCode];
        } else {
            [_keyCommandDelegate onKeyUp:keyCode];
        }
    }
    
    //else
    if ([keyCode isEqualToString:@"43"] == NO) {
        [super handleKeyUIEvent:event];
    }
}


@end
