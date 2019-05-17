//
//  Application.h
//  vscode
//
//  Created by aniwei on 2019/5/10.
//  Copyright © 2019 aniwei. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol ApplicationDelegate

@required
- (void)onKeyUp:(NSString *)keyCode;
- (void)onKeyDown:(NSString *)keyCode;

@end

@interface Application : UIApplication

+ (Application *)sharedApplication;
@property id <ApplicationDelegate> keyCommandDelegate;

@end

NS_ASSUME_NONNULL_END
