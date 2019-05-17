//
//  WKWebViewController.h
//  vscode
//
//  Created by aniwei on 2019/5/11.
//  Copyright © 2019 aniwei. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>
#import "Application.h"


@interface WKWebViewController : UIViewController <WKNavigationDelegate, ApplicationDelegate>

@property (strong, nonatomic) WKWebView * wkWebView;

- (void) load: (NSString *) url;

@end

