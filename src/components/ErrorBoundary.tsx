"use client";

import { AlertTriangle } from "lucide-react";
import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Lỗi không mong muốn trong ứng dụng:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-navy-950 px-6 text-center text-white">
          <AlertTriangle className="h-12 w-12 text-gold-400" />
          <h1 className="text-xl font-semibold">Đã có lỗi xảy ra</h1>
          <p className="max-w-sm text-sm text-white/70">
            Rất tiếc, trang đã gặp sự cố ngoài ý muốn. Vui lòng tải lại trang hoặc
            liên hệ hotline để được hỗ trợ.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            className="rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Tải lại trang
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
