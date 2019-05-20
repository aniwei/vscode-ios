//
//  WKWebViewController.m
//  vscode
//
//  Created by aniwei on 2019/5/11.
//  Copyright © 2019 aniwei. All rights reserved.
//

#import "WKWebViewController.h"

@interface WKWebViewController ()

@end

@implementation WKWebViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    [self createWKWebView];
    [self registerJavaScript];
}

- (void) createWKWebView {
    self.wkWebView = [[WKWebView alloc] initWithFrame:self.view.bounds];
    self.wkWebView.scrollView.bounces = NO;
    self.wkWebView.navigationDelegate = self;
    
    self.bridge = [WebViewJavascriptBridge bridgeForWebView:self.wkWebView];
    
    [self.view addSubview:self.wkWebView];
}


- (void) registerJavaScript {
    [self.bridge setWebViewDelegate:self];
    
    [self.bridge registerHandler:@"navigator.clipboard.readText" handler:^(id data, WVJBResponseCallback responseCallback) {
        
        UIPasteboard *pasteBoard = [UIPasteboard generalPasteboard];
        
        responseCallback([pasteBoard string]);
    }];
    
    [self.bridge registerHandler:@"navigator.clipboard.writeText" handler:^(id data, WVJBResponseCallback responseCallback) {
        
        UIPasteboard *pasteBoard = [UIPasteboard generalPasteboard];
        
        [pasteBoard setString: data[@"content"]];
    }];
    
    
}


- (void) evaluateJavaScriptSoftwareDevelopmentKit {
    NSArray *files = @[@"jsRuntime"];
    NSString *scripts = @"";
    int i = 0;
    int count = [files count];

    for (;i < count; i++) {
        NSString *path = [[NSBundle mainBundle] pathForResource: [files objectAtIndex:i] ofType: @"js"];
        NSURL *url = [NSURL fileURLWithPath:path];
        NSString *script = [NSString stringWithContentsOfURL:url encoding: NSUTF8StringEncoding  error:nil];
        scripts = [scripts stringByAppendingString: script];
    }
    
    [self.wkWebView evaluateJavaScript:scripts completionHandler:nil];
}

- (void) load: (NSString *) site {
    if (site != nil) {
        NSURL *url = [NSURL URLWithString:site];
        NSURLRequest *request = [NSURLRequest requestWithURL:url];
        
        [self.wkWebView loadRequest:request];
    }
}

- (void) onProcessKeyEvent: (NSString *)type keyCode: (NSString *) keyCode {
    NSString *script = [NSString stringWithFormat: @"(function () { if (typeof jsRuntime === 'object') { jsRuntime.dispatchEvent('%@',%@) } })();", type, keyCode, keyCode];
    
    
    [self.wkWebView evaluateJavaScript:script completionHandler:nil];
}

- (void)onKeyUp:(NSString *)keyCode {
    [self onProcessKeyEvent:@"keyup" keyCode:keyCode];
}

- (void)onKeyDown:(NSString *)keyCode {
    [self onProcessKeyEvent:@"keydown" keyCode:keyCode];
}

- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation {
    [self evaluateJavaScriptSoftwareDevelopmentKit];
}

@end
