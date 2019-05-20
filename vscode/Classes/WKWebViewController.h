//
//  WKWebViewController.h
//  vscode
//
//  Created by aniwei on 2019/5/11.
//  Copyright © 2019 aniwei. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>
#import <WebViewJavascriptBridge.h>
#import "Application.h"


@interface WKWebViewController : UIViewController <WKNavigationDelegate, ApplicationDelegate>

@property (strong, nonatomic) WKWebView * wkWebView;
@property (strong, nonatomic) WebViewJavascriptBridge * bridge;

- (void) load: (NSString *) url;

@end

